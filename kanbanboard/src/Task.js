import React from 'react';
import styles from './assets/css/Task.css';

export default function({name}) {

    return (
        <li class={styles.Task}>
            <input type='checkbox' checked='false' />
            {name}
            <a href='#' class={styles['Task--remove']}></a>
        </li> 
    );
}