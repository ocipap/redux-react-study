import React, { Component } from 'react';

import './App.css';
import PaletteContainer from './container/PaletteContainer';
import CounterContainer from './container/CounterContainer';
import WaitingContainer from './container/WaitingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingContainer />
      </div>
    );
  }
}

export default App;
