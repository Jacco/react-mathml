import React from 'react';
import ApplyTemplate from './ApplyTemplate';

const Division = ({ expr: operands, priority, path, onClick }) => {
    console.log('Division path', path);
    const [numerator, denominator] = operands;
    return (
        <mjx-mfrac space='4'>
            <mjx-frac type='d'>
                <mjx-num>
                    <mjx-nstrut />
                    <ApplyTemplate
                        p={priority}
                        expr={numerator}
                        path={`${path}.[div].${numerator.idx}`}
                        onClick={onClick}
                    />
                </mjx-num>
                <mjx-dbox>
                    <mjx-dtable>
                        <mjx-line type='d' />
                        <mjx-row>
                            <mjx-den>
                                <mjx-dstrut />
                                <ApplyTemplate
                                    p={priority}
                                    expr={denominator}
                                    path={`${path}.[div].${denominator.idx}`}
                                    onClick={onClick}
                                />
                            </mjx-den>
                        </mjx-row>
                    </mjx-dtable>
                </mjx-dbox>
            </mjx-frac>
        </mjx-mfrac>
    );
};

export default Division;