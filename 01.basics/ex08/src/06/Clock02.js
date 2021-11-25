import React from 'react';

export default function() {
    
    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let session = 'AM';

    

    return (
        <div>  
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '} 
            {seconds < 10 ? '0' + seconds : seconds}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}