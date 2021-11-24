// import { myComponent } from './components/MyComponent'
import React from 'react';

const App = function() {
    // const app = React.createElement('h1', null, 'Hello World');
    // return app;

    const message = 'hello World';
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export {App}