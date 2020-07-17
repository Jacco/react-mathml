import React, { useContext, useEffect } from 'react';
import MathOperator from './MathOperator';
import MathContext from './MathContext';
import ApplyTemplate from './ApplyTemplate';
import { set } from 'object-path-immutable';

const Refactor_Simplify = (input) => {
    const [operator, ...children] = input.children;
    const noidx = children.map(x => { const y = JSON.parse(JSON.stringify(x)); delete y.idx; return y });
    const chk = JSON.stringify(noidx[0]);
    if (noidx.every(x => JSON.stringify(x) === chk)) {
        // T + T + T = 3*T
        const rpt = JSON.parse(JSON.stringify(children[0]));
        rpt.idx = 2;
        const onew = {
            type: 'apply',
            idx: input.idx,
            children: [
                {
                    type: 'times'
                },
                {
                    type: 'cn',
                    attributes: { type: 'integer' },
                    children: [noidx.length.toString()],
                    idx: 1
                },
                rpt
            ]
        }
        return onew;
    } else if (noidx.some(x => x.type === 'apply' && x.children[0].type === 'plus')) {
        console.log('PLUS')
        // combine plus with plus
        const pidx = noidx.findIndex(x => x.type === 'apply' && x.children[0].type === 'plus');
        const plus = noidx[pidx];
        const onew = [{ type: 'plus' }, ...noidx.slice(0,pidx), ...plus.children.slice(1), ...noidx.slice(pidx+1)].map((x, i) => { x.idx = i+1; return x; });
        input = set(input, 'children', onew);
        console.log(JSON.parse(JSON.stringify(input)))
        return input;
    } else if (false) {
        // combine terms with same xyz powers (inlcudes x^0)

    }
    return input;
};

const Addition = ({ expr: operands, priority, path, onClick }) => {
    const ctx = useContext(MathContext);
    const registerActions = ctx.registerActions;
    const unregisterActions = ctx.unregisterActions;        
    useEffect(() => {
        const actions = { 
            '.': Refactor_Simplify
        };
        registerActions(path, actions);
        return () => unregisterActions(path, actions);
    }, [registerActions, unregisterActions, path]);
    const isSelected = path === ctx.selectedPath;
    console.log('ADDITION', priority)
    return (
        <mjx-mrow style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
            {priority > 2 && <MathOperator>(</MathOperator>}
            {operands.reduce((a, o, j) => {
                const npath = `${path}.[add].${o.idx}`;
                if (j > 0) {
                    const c = o.children || [];
                    if (o.type === 'cn' && !c.length && Number(o.textContent) < 0) {
                        a.push(<MathOperator key={`op-${j}`} path={`${npath}.0`}>{`\u2212`}</MathOperator>);
                        a.push(<mjx-mn key={`n-${j}`}>{Number(o.textContent)}</mjx-mn>);
                    } else if (o.type === 'apply' && c.length === 2 && c[0].type === 'minus') {
                        a.push(<MathOperator key={`op-${j}`} path={`${npath}.0`}>{`\u2212`}</MathOperator>);
                        a.push(<ApplyTemplate key={`a-${j}`} priority={3} expr={c[1]} path={npath} />);
                    } else if (
                        o.type === 'apply' &&
                        c.length > 2 &&
                        c[0].type === 'times' &&
                        c[1].type === 'cn' &&
                        Number(c[1].textContent) < 0
                    ) {
                        a.push(<MathOperator key={`op-${j}`} path={`${npath}.0`}>{`\u2212`}</MathOperator>);
                        c[1].textContent = -Number(c[1].textContent); // fix me: modifying document
                        a.push(<ApplyTemplate key={`a-${j}`} priority={3} expr={o} path={npath} />);
                    } else {
                        a.push(<MathOperator key={`op-${j}`} path={`${npath}.0`}>+</MathOperator>);
                        a.push(<ApplyTemplate key={`a-${j}`} priority={3} expr={o} path={npath} onClick={onClick} />);
                    }
                } else {
                    a.push(<ApplyTemplate key={`a-${j}`} priority={3} expr={o} path={npath} onClick={onClick} />);
                }
                return a;
            }, [])}
            {priority > 2 && <MathOperator>)</MathOperator>}
        </mjx-mrow>
    );
};

export default Addition;