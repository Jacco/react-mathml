import React from 'react';
import Power from './Power';
import Root from './Root';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
import Equation from './Equation';

import ApplyTemplate from './ApplyTemplate';
import MathOperator from './MathOperator';
import { MF } from './Generic';

const Templates = {
    eq: Equation,
    divide: Division,
    times: Multiplication,
    minus: Subtraction,
    plus: Addition,
    root: Root,
    power: Power,
};

const Apply = ({ expr, priority, path, onClick }) => {
    var first = null;
    var operands = [],
        bvars = [],
        params = [];
    expr.forEach((c) => {
        if (typeof c !== 'string') {
            const nm = c.type;
            if (nm === 'bvar') {
                bvars.push(c);
            } else if (
                nm === 'condition' ||
                nm === 'degree' ||
                nm === 'logbase' ||
                nm === 'lowlimit' ||
                nm === 'uplimit' ||
                (nm === 'interval' && !operands.length) ||
                nm === 'domainofapplication'
            ) {
                params.push(c);
            } else if (first === null) {
                first = c;
            } else {
                operands.push(c);
            }
        }
    });
    if (first) {
        var nm = first.type;
        // const { children } = first;
        nm = nm === 'csymbol' ? first.textContent : nm;
        const C = Templates[nm];
        if (C) {
            //ctopTapply[nm](target, node, first, operands, bvars, params, level);
            if (nm === 'minus') {
                console.log('minus', operands, expr);
            }
            return (
                <C
                    priority={priority}
                    params={params}
                    expr={operands}
                    path={`${path}`}
                    onClick={onClick}
                />
            );
        } else {
            return (
                <mjx-mrow>
                    {expr ? <ApplyTemplate p={0} expr={{ first }} /> : <mjx-mi>{nm}</mjx-mi>}
                    <MathOperator>{'\u2061'}</MathOperator>
                    <MF openSymbol='(' closeSymbol=')' expr={operands} />
                </mjx-mrow>
            );
        }
    } else {
        return <mjx-mrow />;
    }
};

export default Apply;