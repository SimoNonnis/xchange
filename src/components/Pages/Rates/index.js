import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';

const Rates = () => (
  <div>
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link to="/exchange">
        <BackIcon className="icon" />
      </Link>
    </nav>
    <h1>Rates Page</h1>
  </div>
);

export default Rates;
