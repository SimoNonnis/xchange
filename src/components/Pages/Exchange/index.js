import React from 'react';
import { Link } from 'react-router-dom';

const Exchange = () => (
  <div>
    <header>
      <Link to="/">Back</Link>
      <Link to="/rates">Rates</Link>
    </header>
    <h1>Exchange Page</h1>
  </div>
);

export default Exchange;
