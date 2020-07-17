import React, { useContext, useEffect } from 'react';
import MathContext from './MathContext';
import { set } from 'object-path-immutable';
import { one } from '../../utils/mathconsts';

// attributes.type => integer | real | double | hexdouble | e-notation | rational | complex-cartesian | complex-polar | constant | text 
// attributes.base => integer
// context => text | mglyph | sep | PresentationExpression

const IncreaseRational = (input) => {
    if (input.type === 'cn' && input.attributes?.type === 'rational') {
        const [numerator, sep, denominator] = input.children;
        input = set(input, 'children.0', (parseInt(input.children[0]) + parseInt(input.children[2])).toString());
    }
    return input;
};

const DecreaseRational = (input) => {
    if (input.type === 'cn' && input.attributes?.type === 'rational') {
        const [numerator, sep, denominator] = input.children;
        input = set(input, 'children.0', (parseInt(input.children[0]) - parseInt(input.children[2])).toString());
    }
    return input;
};

const RationalNumber = React.forwardRef(({ expr, path, ...rest }, ref) => {
    const ctx = useContext(MathContext);
    const registerActions = ctx.registerActions;
    const unregisterActions = ctx.unregisterActions;        
    useEffect(() => {
        const actions = { 
            '+': IncreaseRational,
            '-': DecreaseRational
        };
        registerActions(path, actions);
        return () => unregisterActions(path, actions);
    }, [registerActions, unregisterActions, path]);
    const [numerator, sep, denominator] = expr;
    const isSelected = ctx.selectedPath === path;
    return (
        <mjx-mfrac ref={ref} space='4' style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
            <mjx-frac type='d'>
                <mjx-num>
                    <mjx-nstrut />
                    <NaturalNumber expr={[numerator]} path={`${path}.[rat].0`} {...rest} />
                </mjx-num>
                <mjx-dbox>
                    <mjx-dtable>
                        <mjx-line type='d' />
                        <mjx-row>
                            <mjx-den>
                                <mjx-dstrut />
                                <NaturalNumber expr={[denominator]} path={`${path}.[rat].2`} {...rest} />                            </mjx-den>
                        </mjx-row>
                    </mjx-dtable>
                </mjx-dbox>
            </mjx-frac>
        </mjx-mfrac>        
    )
});

const IncreaseNatural = (input) => {
    if (input.type === 'cn' && input.attributes?.type === 'integer') {
        input = set(input, 'children.0', (parseInt(input.children[0])+1).toString());
    }
    if (typeof input === 'string') {
        input = (parseInt(input) + 1).toString();
    }
    return input;
};

const DecreaseNatural = (input) => {
    if (input.type === 'cn' && input.attributes?.type === 'integer') {
        input = set(input, 'children.0', (parseInt(input.children[0])-1).toString());
    }
    if (typeof input === 'string') {
        input = (parseInt(input) - 1).toString();
    }    
    return input;
};

const NaturalNumber = React.forwardRef(({ expr, p, path, ...rest }, ref) => {
    const ctx = useContext(MathContext);
    const registerActions = ctx.registerActions;
    const unregisterActions = ctx.unregisterActions;    
    useEffect(() => {
        const actions = { 
            '+': IncreaseNatural,
            '-': DecreaseNatural
        };
        registerActions(path, actions);
        return () => unregisterActions(path, actions);
    }, [path, registerActions, unregisterActions]);
    const isSelected = ctx.selectedPath === path;
    console.log('Number debug', expr);
    const [num] = expr;
    if (typeof num === 'string') {
        return (
            <mjx-mn {...rest} ref={ref} onClick={() => ctx.onClick(path)} style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
                {[...num].map((c, i) => (
                    <mjx-c key={i} class={`mjx-c${c.charCodeAt(0).toString(16).toUpperCase()}`} />
                ))}
            </mjx-mn>
        );
    } else {
        return <div>MathNumber unknown {JSON.stringify(expr)}</div>;
    }
});

const Refactor_DivideByOne = (input) => {
    let idx = input.idx;
    input = set(input, 'idx', 1);
    input = {
        type: "apply",
        idx: idx,
        children: [
            { type: "divide", idx: 0 },
            input,
            { ...one, idx: 2 }
        ]
    }
    return input;
}

const ContentNumber = React.forwardRef(({ type, path, ...rest }, ref ) => {
    const ctx = useContext(MathContext);
    const registerActions = ctx.registerActions;
    const unregisterActions = ctx.unregisterActions;
    useEffect(() => {
        const actions = { 
            '/': Refactor_DivideByOne
        }
        registerActions(path, actions);
        return () => unregisterActions(path, actions);
    }, [registerActions, unregisterActions, path]);
    if (type === 'rational') {
        return <RationalNumber ref={ref} type={type} path={path} {...rest} />
    } else {
        return <NaturalNumber ref={ref} type={type} path={path} {...rest} />
    }
});

export default ContentNumber;