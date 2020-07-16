import React, { useContext, useEffect } from 'react';
import ContentNumber from './ContentNumber';
import ContentIdentifier from './ContentIdentifier'
import Apply from './Apply';

const Templates = {
    apply: Apply,
    ci: ContentIdentifier,
    cn: ContentNumber,
};

const ApplyTemplate = React.forwardRef(({ expr: n, priority, path, onClick, ...rest }, ref) => {
    if (!n) {
        return null;
    }
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
                <ApplyTemplate key={i} p={priority} expr={c} path={`${path}.${c.idx}`} onClick={onClick} />
            ));
        }
    } else {
        return n;
    }
});

export default ApplyTemplate;