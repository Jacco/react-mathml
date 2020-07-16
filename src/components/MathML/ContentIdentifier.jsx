import React, { useContext } from 'react';
import MathContext from './MathContext';

const variableMap = {
    x: '1D465',
    a: '1D44E',
    b: '1D44F',
    c: '1D450',
};

const ContentIdentifier = React.forwardRef(({ expr, path, onClick, ...rest }, ref) => {
    const ctx = useContext(MathContext);
    const c = variableMap[expr];
    const isSelected = path.startsWith(ctx.selectedPath);
    console.log('*** Variable path', isSelected);
    console.log('path', path);
    console.log('sel ', ctx.selectedPath);
    return (
        <mjx-mo ref={ref} onClick={() => onClick(path)} {...rest} style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
            {c ? <mjx-c class={`mjx-c${c} TEX-I`} /> : expr}
        </mjx-mo>
    );
});

export default ContentIdentifier;
