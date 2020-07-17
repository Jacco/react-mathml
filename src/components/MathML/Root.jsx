import React, { useContext } from 'react';
import MathOperator from './MathOperator';
import ApplyTemplate from './ApplyTemplate';
import MathContext from './MathContext';

const Root = ({ expr, params, path, onClick }) => {
    const ctx = useContext(MathContext);
    const isSquareRoot =
        params.length === 0 || (params[0].type === 'degree' && params[0].textContent === '2');
    const isSelected = ctx.selectedPath === path;
    if (isSquareRoot) {
        return (
            <mjx-msqrt space='3' style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
                <mjx-sqrt>
                    <mjx-surd>
                        <MathOperator path={`${path}.[root].0`}>{`\u221A`}</MathOperator>
                    </mjx-surd>
                    <mjx-box>
                        <ApplyTemplate priority={0} expr={expr} path={`${path}.[root]`} onClick={onClick} />
                    </mjx-box>
                </mjx-sqrt>
            </mjx-msqrt>
        );
    } else {
        return <div>Other root</div>;
    }
};

export default Root;