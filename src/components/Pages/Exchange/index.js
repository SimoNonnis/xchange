import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';

const Exchange = () => (
  <div>
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link to="/">
        <BackIcon className="icon" />
      </Link>
      <Link to="/rates">Rates</Link>
      <button>
        <ExchangeIcon className="icon icon-exchange" />
      </button>
    </nav>
    <h1 className="pageTitle">Exchange Page</h1>
  </div>
);

export default Exchange;
