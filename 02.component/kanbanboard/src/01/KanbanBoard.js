import React from 'react';
import CardList from './CardList'
import cards from './assets/json/data.json';
import './assets/css/styles.css'

export default function() {
    // console.log(cards);

    // const a = cards.filter((card) => card.status === 'ToDo')
    // console.log(a);
    return (
        <div className='KanbanBoard'>
            <CardList key='ToDo' title={'ToDo'} cards={ cards.filter((card) => card.status === 'ToDo') }/>
            <CardList key='Doing' title={'Doing'} cards={ cards.filter((card) => card.status === 'Doing') }/>
            <CardList key='Done' title={'Done'} cards={ cards.filter((card) => card.status === 'Done')}/>
        </div>
    )
}