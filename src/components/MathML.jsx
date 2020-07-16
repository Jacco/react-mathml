import React, { useCallback, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'; // ES6
import ReactDOMServer from 'react-dom/server';
import { get, set } from 'object-path-immutable';
import MathContext from './MathML/MathContext';
import { one, zero } from '../utils/mathconsts';
import ApplyTemplate from './MathML/ApplyTemplate';

const XmlToTree = (xml, ctx) => {
    if (xml.nodeType === 1) {
        const el = {
            type: xml.localName,
        };
        ctx.children = ctx.children || [];
        ctx.children.push(el);
        el.idx = ctx.children.length - 1;
        if (xml.attributes.length > 0) {
            console.log('attributes', xml.attributes);
            el.attributes = Object.assign({}, ...Array.from(xml.attributes, ({ name, value }) => ({ [name]: value })));
        }
        if (xml.childNodes) {
            xml.childNodes.forEach((x) => {
                XmlToTree(x, el);
            });
        }
    } else if (xml.nodeType === 3) {
        ctx.children = ctx.children || [];
        ctx.children.push(xml.textContent);
    } else {
        console.log('not found!', xml);
    }
};

const getPath = (mathExpr, path) => {
    path = path
        .split(/\[[^\]]+\]/g)
        .join('children')
        .substr(5);    
    return get(mathExpr, path);
}

const setPath = (mathExpr, path, o) => {
    path = path
        .split(/\[[^\]]+\]/g)
        .join('children')
        .substr(5);    
    return set(mathExpr, path, o);
}

let mathmlid = 1;
const actions = {};

const getRegisterActions = id => (path, acts) => {
    actions[id] = actions[id] || {}; 
    actions[id][path] = actions[id][path] || {}; 
    actions[id][path] = { ...actions[id][path], ...acts };
}

const getUnregisterActions = id => (path, acts) => {
    Object.keys(acts).forEach(a => {
        delete actions[id][path][a];
    });
}

const MathML = ({ children }) => {
    const [id,] = useState((mathmlid++).toString());
    const [mathExpr, setMathExpr] = useState({});
    const [selectedPath, setSelectedPath] = useState('');
    const [ctx, setCtx] = useState({});
    const math = React.Children.only(children);

    useEffect(() => {
        const convert = () => {
            const str = ReactDOMServer.renderToString(children);
            const prs = new DOMParser();
            let eqDoc = prs.parseFromString(str, 'text/xml');
            eqDoc = eqDoc.querySelector('math');
            const root = {
                type: 'root',
            };
            eqDoc.childNodes.forEach((x) => XmlToTree(x, root));
            setMathExpr(root.children);
            console.log('matchExpr', root.children);
        };
        convert();
    }, [children]);

    const partClick = (path) => {
        console.log('onClick', path)
        setSelectedPath(path);
    };

    const partClick2 = useCallback((path) => {
        console.log('onClick', path)
        setSelectedPath(path);
    }, [setSelectedPath]);

    const registerActions = useCallback(getRegisterActions(id), [id]);
    const unregisterActions = useCallback(getUnregisterActions(id), [id]);

    useEffect(() => {
        setCtx({
            onClick: partClick2,
            selectedPath,
            registerActions: registerActions,
            unregisterActions: unregisterActions
        });
        console.log('CTX SET')
    }, [id, partClick2, selectedPath, registerActions, unregisterActions]);

    return (
        <div tabIndex="0" onKeyDown={(e) => {
            console.log(actions[id][selectedPath])
            if (actions[id], actions[id][selectedPath] && actions[id][selectedPath][e.key]) {
                console.log('ACTIONS', actions[id], selectedPath, actions[id][selectedPath]);
                let o = getPath(mathExpr, selectedPath);
                o = actions[id][selectedPath][e.key](o);
                if (o) {
                    setMathExpr(setPath(mathExpr, selectedPath, o)); 
                }               
            } else if (e.keyCode === 27) {
                let path = selectedPath
                    .split('.')
                    .slice(0, -2)
                    .join('.');
                setSelectedPath(path);
            } else if (e.keyCode === 39) {
                let path = selectedPath
                    .split(/\[[^\]]+\]/g)
                    .join('children')
                    .substr(5)
                    .split('.');
                const next = parseInt(path[path.length-1]) + 1;
                path = path.slice(0, -1).join('.');
                const o = get(mathExpr, path);
                //console.log(JSON.stringify(o), 'NEXT', next);
                if (o.some(x => x.idx === next)) {
                    setSelectedPath(selectedPath.split('.').slice(0, -1).join('.') + '.'+ next);
                };
            } else if (e.keyCode === 37) {
                let path = selectedPath
                    .split(/\[[^\]]+\]/g)
                    .join('children')
                    .substr(5)
                    .split('.');
                const next = parseInt(path[path.length-1]) - 1;
                if (next > 0) {
                    path = path.slice(0, -1).join('.');
                    const o = get(mathExpr, path);
                    //console.log(JSON.stringify(o), 'NEXT', next);
                    if (o.some(x => x.idx === next)) {
                        setSelectedPath(selectedPath.split('.').slice(0, -1).join('.') + '.'+ next);
                    };
                }
            } else if (e.key === '+') {
                let o = getPath(mathExpr, selectedPath);
                if (o.type === 'apply' || o.type === 'ci') {
                    let idx = o.idx;
                    o = set(o, 'idx', 1);
                    const add = {
                        type: "apply",
                        idx: idx,
                        children: [
                            { type: "plus", idx: 0 },
                            o,
                            { ...zero, idx: 2 }
                        ]
                    }
                    setMathExpr(setPath(mathExpr, selectedPath, add));                     
                }
            } else if (e.key === '^') {
                let o = getPath(mathExpr, selectedPath);
                let idx = o.idx;
                o = set(o, 'idx', 1);
                const pwr = {
                    type: "apply",
                    idx: idx,
                    children: [
                        { type: "power", idx: 0 },
                        o,
                        { ...one, idx: 2 }
                    ]
                }
                setMathExpr(setPath(mathExpr, selectedPath, pwr));
            } else if (e.key === '*') {
                let o = getPath(mathExpr, selectedPath);
                let idx = o.idx;
                o = set(o, 'idx', 1);
                const tms = {
                    type: "apply",
                    idx: idx,
                    children: [
                        { type: "times", idx: 0 },
                        o,
                        { ...one, idx: 2 }
                    ]
                }
                setMathExpr(setPath(mathExpr, selectedPath, tms));
            } else if (e.keyCode === 83) {
                // simplify per step
                // reduce: T / 1 => T
                // reduce: T * 1 => T
                // reduce: T ^ 1 => T
                // reduce: T ^ 0 => 1
                // reduce: (T1 + T2) + T3 => T1 + T2 + T3
                // reduce: R => C1/C2 (ie 0.5 => 1/2)
                // reduce: C1 + C2 = C3
                // reduce (C1+(C2/C3)) + (C4+(C5/C6)) = C7+(C8/C9) (combine rationals) 
                // maybe: T1 - T2 = T1 + -T2 (display is same)
                // reduce: (C * Tx) / Tx => C
                // reduce: C * Tx^n / Tx^m => C * Tx^(n-m)
                // reduce: C1.Tx + C2.Tx => (C1+C2).Tx
                // solve: 2.x^2 + 2.x => (2.x) . (x + 1)
                // style: 2.x + 2 = 2.(x + 1)
                // style: x . 42 . z => 42 . x . z
                // style: (42 . x) / y => 42 . (x / y)
                // style: T1 + C = T2 => T2 - T1 = C
            } else {
                console.log('KEYCODE', e.key);
                console.log(e);
            }
        }}>
            <mjx-container jax='CHTML' display='true'>
                <mjx-math display='true' class='MJX-TEX'>
                    <MathContext.Provider value={ctx}>
                        <ApplyTemplate expr={mathExpr} priotiry={0} path='math' onClick={partClick} />
                    </MathContext.Provider>
                </mjx-math>
            </mjx-container>
            <button
                onClick={() => {
                    let path = selectedPath
                        .split(/\[[^\]]+\]/g)
                        .join('children')
                        .substr(5);

                    //let me = JSON.parse(JSON.stringify(mathExpr));
                    path = path.split('.').slice(0, -1).join('.');
                    const o = get(mathExpr, path);
                    const newarr = [o[0], ...o.slice(1).reverse()];
                    newarr.forEach((o, i) => o.idx = i);
                    setMathExpr(set(mathExpr, path, newarr));
                    //alert(path + JSON.stringify(o));
                    //const ar = mathExpr[0].children;
                    //mathExpr[0].children = [ ar[0], ar[2], ar[1] ];
                    //setMathExpr([...mathExpr]);
                }}
            >
                SWAP sel
            </button>
            <button
                onClick={() => {
                    let ar = mathExpr[0].children;
                    mathExpr[0] = {
                        type: 'apply',
                        children: [ar[0], ar[2], ar[1]],
                    };
                    setMathExpr([...mathExpr]);
                }}
            >
                SWAP div
            </button>
        </div>
    );
};

MathML.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MathML;
