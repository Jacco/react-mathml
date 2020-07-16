import React from 'react';

const MathContext = React.createContext({
    path: '',
    onClick: () => {},
    registerActions: () => {},
    unregisterActions: () => {}
})

export default MathContext;