import React from 'react';

export default function() {
    
    const date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let session = 'AM';

    if (hours > 12) {
        session = 'PM'; 
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    return (
        <div>  
            {hours} : {('0' + minutes).slice(-2)} : {seconds < 10 ? '0' + seconds : seconds} {session}
        </div>
    )
}