import React from 'react';
import Card from './Card';
import styles from './assets/css/CardList.css';

export default function({title, cards}) {
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map((card) => <Card
                                    key={card.no}
                                    title={card.title}
                                    description={card.description}
                                    tasks={card.tasks}
                                    status={card.status} /> ) }
        </div>
    )
}