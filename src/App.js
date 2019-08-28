import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 'TODO'
    }
    this.yyy = this.onName.bind(this)
  }
  onName(e) {
    this.name = e.target.value
  }
  doHi = (e) => {
    this.setState({
      result : 'Hello ' + this.name
    })
  }
  render() {
    return (
      <div>
        Your name: <input type="text" onKeyUp={this.yyy}/>
        <button onClick={this.doHi}>Hi !!</button>
        <h2>{this.state.result}</h2>
      </div>
    )
  }
}

export default App;
