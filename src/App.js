import React, { Component } from 'react';
import Timeline from './Timeline/Timeline';
import './App.css';

class App extends Component {
  state = {
    totalTime: 60,
    additions: [
      [60, 'hops', '1oz', 'Centennial'],
      [30, 'hops', '1oz', 'Centennial'],
      [5, 'hops', '2oz', 'Centennial']
    ]
  }

  render () {

    return (
      <div className='container'>
        <Timeline totalTime={this.state.totalTime} additions={this.state.additions}/>
      </div>
    );
  }
}

export default App;
