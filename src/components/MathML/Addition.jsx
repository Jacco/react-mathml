import React from 'react';
import MathOperator from './MathOperator';
import ApplyTemplate from './ApplyTemplate';

const Addition = ({ expr: operands, priority, path, onClick }) => {
    return (
        <mjx-mrow>
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