import React, { useState } from 'react';

export default function TitelBar02() {
    const onCLickHandler = (e) => {
        
        console.log("TitileBar01 clicked");
    }

    return (
        <h1 
            onClick = {onCLickHandler}
            style={{cursor: 'pointer'}}>ex03- Functional Event Handler(Functional Component) </h1>
    )
}