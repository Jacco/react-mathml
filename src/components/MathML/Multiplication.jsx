import React, { useContext } from 'react';
import { Intersperse } from './Generic';
import MathContext from './MathContext';


const Refactor_Simplify = (input) => {
    const [operator, ...children] = input.children;
    const noidx = children.map(x => { const y = JSON.parse(JSON.stringify(x)); delete y.idx; return y });
    const chk = JSON.stringify(noidx[0]);
    if (noidx.every(x => JSON.stringify(x) === chk)) {
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
        // combine plus with plus
    } else if (false) {
        // combine terms with same xyz powers
    }
    return input;
};

const Multiplication = ({ expr: operands, priority, path }) => {
    const ctx = useContext(MathContext);
    const isSelected = ctx.selectedPath === path;
    return (
        <Intersperse
            useBrackets={priority > 3}
            priority={3}
            symbol={(o) => (o.type === 'cn' ? '\u00D7' : '\u2062')}
            expr={operands}
            path={path}
            onClick={ctx.onClick}
            opPath='*'
            selected={isSelected}
        />
    );
};

export default Multiplication;