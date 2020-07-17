import React, { useContext } from 'react';
import { Intersperse } from './Generic';
import MathContext from './MathContext';

const Equation = ({ expr: operands, priority, path, onClick }) => {
    const ctx = useContext(MathContext);
    const isSelected = path === ctx.selectedPath;
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
            selected={isSelected}
        />
    );
};

export default Equation;