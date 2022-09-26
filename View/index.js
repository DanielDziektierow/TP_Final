import React, { Component } from 'react';
import { render } from 'react-dom';

//import App from './App';
class App extends Component{
    render(){
        return (<h1>
            hola aca estoy
        </h1>)
    }
}
render(<App/>, document.getElementById('app'));