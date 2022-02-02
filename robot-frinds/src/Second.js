import React, { Component } from 'react';
import './Second.css';

class Second extends Component{
    render(){
        return (
        <div className='f1 tc'>
            <h1>Hey mf</h1>
            <h2>Hellooooooooooo</h2>
            <p>{this.props.greeting} </p>
        </div>
        );
    }
}

// function Second(){
//     return (
//         <h1>Hellooo everybody</h1>
//     )
// }


export default Second;