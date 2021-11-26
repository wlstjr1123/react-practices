import React, { Component } from 'react';
import ListItem from './ListItem'

export default class FoodList extends Component {
    render() {
        const components = [];
        // const foods = this.props.foods;

        // for (let i = 0; i < FoodList.length; i++) {
        //     components[i] = <ListItem name={foods[i].name} quantity={foods[i].quantity} />;
        // }

        // const r = [1, 2, 3, 4].map(function(e) {
        //     return e * e
        // });

        // const r = this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity} />);
        // console.log(r);
        return (
        <ul>
            {
                 this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity} />)
            }
        </ul>
        )
    }
}