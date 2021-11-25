import React, {Fragment} from 'react';
import Clock from './Clock';

export default function() {
    return (
        <Fragment>
            <p>{ `JSX Tutorials - Dynamic HTML Rendering` }</p>
            <Clock />
        </Fragment>
    );
}