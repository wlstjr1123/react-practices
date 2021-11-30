import React from 'react';

export default function () {
    return (
        <div
            onCLick={(e) => { console.log('click!') } }
            style={{cursor: 'pointer'}}>
            ex03 - Inline Handler</div>
    );
}