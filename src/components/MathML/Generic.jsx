import React from 'react';
import ApplyTemplate from './ApplyTemplate';
import MathOperator from './MathOperator';

export const MF = ({ expr: children, openSymbol, closeSymbol }) => {
    return (
        <mfenced openSymbol={openSymbol} closeSymbol={closeSymbol}>
            {children.map((c, i) => (
                <ApplyTemplate key={i} p={0} expr={c} />
            ))}
        </mfenced>
    );
};

export const Intersperse = ({ expr: children, useBrackets, priority, symbol, path, onClick, opPath, selected }) => {
    return (
        <mjx-mrow style={{ backgroundColor: selected ? 'red' : 'transparent' }}>
            {useBrackets && <MathOperator>(</MathOperator>}
            {children.reduce((a, v, i) => {
                i &&
                    a.push(
                        <MathOperator key={`o-${i}`} path={`${path}.[op-${symbol(v)}].0`}>
                            {symbol(v)}
                        </MathOperator>
                    );
                v &&
                    a.push(
                        <ApplyTemplate
                            key={`a-${i}`}
                            priority={priority}
                            expr={v}
                            path={`${path}.[op-${opPath}].${v.idx}`}
                            onClick={onClick}
                        />
                    );
                return a;
            }, [])}
            {useBrackets && <MathOperator>)</MathOperator>}
        </mjx-mrow>
    );
};

export const Binary = ({ expr: operands, newPriority, oldPriority, symbol, path, onClick, opPath, selected }) => {
    return (
        <Intersperse
            useBrackets={
                newPriority < oldPriority || (newPriority === oldPriority && symbol() === '-')
            }
            priority={newPriority}
            symbol={symbol}
            expr={operands}
            path={path}
            onClick={onClick}
            opPath={opPath}
            selected={selected}
        />
    );
};
