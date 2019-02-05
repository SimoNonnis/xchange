import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Exchange from '../Pages/Exchange';
import Rates from '../Pages/Rates';

const App = () => (
  <div className="app-container">
    <header>
      <Link to="/">Home</Link>
      <Link to="/exchange">Exchange</Link>
      <Link to="/rates">Rates</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/exchange" component={Exchange} />
      <Route exact path="/rates" component={Rates} />
    </main>
  </div>
);

export default App;
