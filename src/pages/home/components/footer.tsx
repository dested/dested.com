import * as React from 'react';
import glamorous from 'glamorous';

const Holder = glamorous.div({
    backgroundColor: '#444',
    width: '100%'
});

const Inner = glamorous.div({
    backgroundColor: '#222',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1570px',
    height: '4rem',
    fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: '#ccc'
});

const Copyright = glamorous.span({});
export let Footer: React.SFC = () => {
    return (
        <Holder>
            <Inner>
                <Copyright>Copyright © Dested LLC {new Date().getFullYear()}</Copyright>
            </Inner>
        </Holder>
    );
};