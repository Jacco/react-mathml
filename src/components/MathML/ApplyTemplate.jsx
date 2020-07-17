import React, { useContext, useEffect } from 'react';
import ContentNumber from './ContentNumber';
import ContentIdentifier from './ContentIdentifier'
import Apply from './Apply';
import MathContext from './MathContext';

const Templates = {
    apply: Apply,
    ci: ContentIdentifier,
    cn: ContentNumber,
};

const Refactor_Split = (input) => {
    if (input.type === 'apply' && input.children) {
        if (input.children[0].type === 'times' && input.children[1].type === 'cn' && input.children[1].attributes?.type === 'integer') {
            const cnt = parseInt(input.children[1].children[0]);
            const idx = input.idx;
            if (cnt < 10) {
                input.children.splice(1, 1);
                input.children = input.children.map((x, i) => { x.idx = i; return x });
                let rpt = input;
                if (input.children.length === 2) {
                    rpt = input.children[1];
                }
                const newo = {
                    type: 'apply',
                    idx,
                    children: [
                        {
                            type: 'plus',
                            idx: 0
                        },
                        ...Array(cnt).fill().map((x, i) => ({ ...JSON.parse(JSON.stringify(rpt)), idx: i+1 }))
                    ]
                }
                return newo;
            }
        }
        if (input.children[0].type === 'power' && input.children[2].type === 'cn' && input.children[2].attributes?.type === 'integer') {
            const cnt = parseInt(input.children[2].children[0]);
            const idx = input.idx;
            if (cnt < 10) {
                const rpt = input.children[1];
                const newo = {
                    type: 'apply',
                    idx,
                    children: [
                        {
                            type: 'times',
                            idx: 0
                        },
                        ...Array(cnt).fill().map((x, i) => ({ ...JSON.parse(JSON.stringify(rpt)), idx: i+1 }))
                    ]
                }   
                return newo;             
            }
        }
    }
    return input;  
}

const ApplyTemplate = React.forwardRef(({ expr: n, priority, path, onClick, ...rest }, ref) => {
    if (!n) {
        return null;
    }    
    const ctx = useContext(MathContext);
    const registerActions = ctx.registerActions;
    const unregisterActions = ctx.unregisterActions;   
    console.log('AT', ctx)     
    useEffect(() => {
        const actions = { 
            '|': Refactor_Split
        };
        registerActions(path, actions);
        return () => unregisterActions(path, actions);
    }, [registerActions, unregisterActions, path]);
    if (typeof n !== 'string') {
        if (!Array.isArray(n)) {
            const tp = n.type;
            const C = Templates[tp];
            if (C) {
                return (
                    <C
                        expr={n.children}
                        priority={priority}
                        ref={ref}
                        path={`${path}`}
                        onClick={onClick}
                        {...(n.attributes ? n.attributes : undefined)}
                        {...rest}
                    />
                );
            } else if (n.children && n.children.length === 0) {
                return <mjx-mi>{tp}</mjx-mi>;
            } else {
                return (
                    <div>
                        what now {tp} {JSON.stringify(n)}
                    </div>
                );
            }
        } else {
            return n.map((c, i) => (
                <ApplyTemplate key={i} priority={priority} expr={c} path={`${path}.${c.idx}`} onClick={onClick} />
            ));
        }
    } else {
        return n;
    }
});

export default ApplyTemplate;