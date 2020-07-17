import React, { useContext } from 'react';
import { Binary } from './Generic';
import MathContext from './MathContext';

const Subtraction = ({ expr: operands, priority, path, onClick }) => {
    const ctx = useContext(MathContext);
    const isSelected = ctx.selectedPath === path;
    console.log('Subtraction', operands);
    const cnt = operands.length;
    const newPriority = cnt === 1 ? 5 : 2;
    return (
        <Binary
            newPriority={newPriority}
            oldPriority={priority}
            symbol={() => '\u2212'}
            expr={cnt === 1 ? [undefined, operands[0]] : operands}
            path={path}
            onClick={onClick}
            opPath='-'
            selected={isSelected}
        />
    );
};

export default Subtraction;