import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';

const Rates = () => (
  <div>
    <Link to="/exchange">
      <BackIcon />
    </Link>
    <h1>Rates Page</h1>
  </div>
);

export default Rates;
