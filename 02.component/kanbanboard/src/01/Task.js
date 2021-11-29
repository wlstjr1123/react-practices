import React from 'react';


export default function({name}) {

    return (
        <li class='TaskList__Task'>
            <input type='checkbox' checked='false' />
            {name}
            <a href='#' class='TaskList__Task--remove'></a>
        </li> 
    );
}