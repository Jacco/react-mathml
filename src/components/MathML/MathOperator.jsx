import React from 'react';

const MathOperator = ({ children, path }) => {
    console.log('Operator path', path);
    return (
        <mjx-mo space='4'>
            <mjx-c class={`mjx-c${children.charCodeAt(0).toString(16).toUpperCase()}`} />
        </mjx-mo>
    );
};

export default MathOperator;