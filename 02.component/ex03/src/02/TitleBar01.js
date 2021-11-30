import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor() {
        super(...arguments);
        // no VS state.no

        // this.no = 0
        this.state = {
            no: 0
        }
    }

    onCLickHandler() {
        // no VS state.no
        // this.no++
        this.setState({
            no: this.state.no + 1
        })
        console.log("TitileBar01 clicked");
    }

    render() {
        return (
            <h1 
                onClick = { this.onCLickHandler.bind(this) }
                style={{cursor: 'pointer'}}>ex03- Functional Event Handler(Class Component) 
                {
                    // no VS state.no
                    //`no: ${this.no}, state.no: 
                    this.state.no
                }
                </h1>
        )
    }
}