import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: 'Hello Ibrahim Alayo'
    }
  }
  render(){    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick = {() => this.setState({ string: 'Hello, Ade' })}>Change Text</button>
          <button onClick = {() => this.setState({ string: 'How are you?'})}>Change Text</button>
        </header>
      </div>
    );
  }
}
export default App;
