import React from 'react';
import MathOperator from './MathOperator';
import ApplyTemplate from './ApplyTemplate';

const Root = ({ expr, params, path, onClick }) => {
    const isSquareRoot =
        params.length === 0 || (params[0].type === 'degree' && params[0].textContent === '2');
    if (isSquareRoot) {
        return (
            <mjx-msqrt space='3'>
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