import React from 'react';

const mathContextDefault = {
    path: '',
    onClick: () => {},
    registerActions: () => {},
    unregisterActions: () => {}
}

const MathContext = React.createContext(mathContextDefault);

MathContext.default = mathContextDefault;

export default MathContext;