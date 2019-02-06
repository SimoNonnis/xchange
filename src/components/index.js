import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home';
import Exchange from './Pages/Exchange';
import Rates from './Pages/Rates';

class App extends Component {
  componentDidMount() {
    console.log('getXchangeRates action');
    this.getXchangeRatesInterval();
  }

  componentWillUnmount() {
    clearInterval(this.getXchangeRatesInterval);
  }

  getXchangeRatesInterval = () =>
    setInterval(() => console.log('getXchangeRates action interval'), 10000);

  render() {
    return (
      <div className="app-container">
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/exchange" component={Exchange} />
          <Route exact path="/rates" component={Rates} />
        </main>
      </div>
    );
  }
}

export default App;
