import React from 'react';
import { Binary } from './Generic';

const Subtraction = ({ expr: operands, priority, path, onClick }) => {
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
        />
    );
};

export default Subtraction;