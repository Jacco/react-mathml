import React from 'react';
import { Intersperse } from './Generic';

const Multiplication = ({ expr: operands, priority, path, onClick }) => {
    return (
        <Intersperse
            useBrackets={priority > 3}
            level={priority}
            symbol={(o) => (o.type === 'cn' ? '\u00D7' : '\u2062')}
            expr={operands}
            path={path}
            onClick={onClick}
            opPath='*'
        />
    );
};

export default Multiplication;