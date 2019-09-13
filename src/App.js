import React, { Component } from 'react';
import './App.css';
import Brew from './containers/Brew/Brew';
import Start from './containers/Start/Start';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  state = {
    
  };

  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={Brew} />
        <Route path='/start' component={Start} />
      </BrowserRouter>
        
    );  
  }
}

export default App;
