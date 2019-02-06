import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';

const Exchange = () => (
  <div>
    <header>
      <Link to="/">
        <BackIcon />
      </Link>
      <Link to="/rates">Rates</Link>
      <ExchangeIcon />
    </header>
    <h1>Exchange Page</h1>
  </div>
);

export default Exchange;
