import React, { Component } from 'react';
import Timeline from './Timeline/Timeline';
import Adder from './Adder/Adder';
import './App.css';

class App extends Component {
  state = {
    totalTime: 60,
    additions: [
      [60, 'hops', '1oz', 'CENTENNIAL'],
      [30, 'hops', '1oz', 'CENTENNIAL'],
      [5, 'hops', '2oz', 'CENTENNIAL'],
      [15, 'hops', '1oz', 'CITRA']
    ]
  }

  addToAdditions() {
    alert("Hey there");
  }

  render () {

    return (
      <div className='container'>
        <Timeline totalTime={this.state.totalTime} additions={this.state.additions}/>
        <Adder submitFunction={this.addToAdditions}/>
      </div>
    );
  }
}

export default App;
