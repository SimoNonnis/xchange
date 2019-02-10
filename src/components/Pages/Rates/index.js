import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectedPocket } from '../../../reducers/sections/pocketSelection';
import { selectdRates } from '../../../reducers/sections/rates';
import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import Rate from '../../Rate';

const Rates = ({ rates, selected }) => (
  <div>
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link to="/exchange">
        <BackIcon className="icon" />
      </Link>
    </nav>
    <h1 className="pageTitle">Rates Page</h1>
    <div className="rates-container">
      {rates.map(rate => (
        <Rate selectedCode={selected} name={rate.name} amount={rate.amount} />
      ))}
    </div>
  </div>
);

export default connect(state => ({
  rates: selectdRates(state),
  selected: selectedPocket(state)
}))(Rates);
