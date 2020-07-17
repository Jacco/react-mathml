import React, { useContext } from 'react';
import ApplyTemplate from './ApplyTemplate';
import MathContext from './MathContext';

// try if you can find if denominator is a factor of numerator

const Division = ({ expr: operands, priority, path, onClick }) => {
    const ctx = useContext(MathContext);
    console.log('Division path', path);
    const isSelected = path === ctx.selectedPath;    
    const [numerator, denominator] = operands;
    return (
        <mjx-mfrac space='4' style={{ backgroundColor: isSelected ? 'red' : 'transparent' }}>
            <mjx-frac type='d'>
                <mjx-num>
                    <mjx-nstrut />
                    <ApplyTemplate
                        priority={priority}
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
                                    priority={priority}
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