
import React, { useState, useCallback, useEffect } from 'react';
import ApplyTemplate from './ApplyTemplate';

const Power = ({ expr, priority, params, path, onClick }) => {
    const [base, exponent] = expr;
    const [va, setVA] = useState('0');
    const [baseNode, setBaseNode] = useState(null);
    const [superNode, setSuperNode] = useState(null);
    const measureSuper = useCallback((node) => {
        setSuperNode(node);
    }, []);
    const measureBase = useCallback((node) => {
        setBaseNode(node);
    }, []);
    useEffect(() => {
        if (baseNode && superNode) {
            setVA(
                `${
                    baseNode.getBoundingClientRect().height -
                    superNode.getBoundingClientRect().height
                }px`
            );
        }
    }, [baseNode, superNode]);
    return (
        <mjx-msup>
            <ApplyTemplate
                ref={measureBase}
                priority={priority}
                expr={base}
                path={`${path}.[pwr].${base.idx}`}
                onClick={onClick}
            />
            <mjx-script style={{ verticalAlign: va }}>
                <ApplyTemplate
                    ref={measureSuper}
                    priority={priority}
                    size='s'
                    expr={exponent}
                    path={`${path}.[pwr].${exponent.idx}`}
                    onClick={onClick}
                />
            </mjx-script>
        </mjx-msup>
    );
};

export default Power;