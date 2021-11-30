import React from 'react';
import styles from './assets/css/styles.css'
import Form from './form';
import Guestbook__List from './GuestbookList';

export default function() {
    return (
      <div className={styles.Guestbook}>
            <h1>방명록</h1>

            <Form/>
            <Guestbook__List/>

        </div>
    )
}