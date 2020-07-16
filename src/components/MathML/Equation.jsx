import React from 'react';
import { Intersperse } from './Generic';

const Equation = ({ expr: operands, priority, path, onClick }) => {
    console.log('Equation path', path);
    // reorder operands
    // if more than 2: split into multiple equations
    return (
        <Intersperse
            useBrackets={priority > 1}
            level={priority}
            symbol={() => '='}
            expr={operands}
            path={path}
            onClick={onClick}
            opPath='='
        />
    );
};

export default Equation;