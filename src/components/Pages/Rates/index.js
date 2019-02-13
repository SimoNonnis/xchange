import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectPocketsList,
  selectPocketsInfo
} from '../../../reducers/sections/pockets';
import { selectedPocket } from '../../../reducers/sections/pocketSelection';
import { selectedRates } from '../../../reducers/sections/rates';
import { filterCurrencyCodes } from '../../../utils';
import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import Rate from '../../Rate';

const Rates = ({ currenciesList, pocketsInfo, rates, selected }) => (
  <div>
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <Link to="/exchange">
        <BackIcon className="icon" />
      </Link>
    </nav>
    <h1 className="pageTitle">Rates Page</h1>
    <div className="rates-container">
      {currenciesList.map(code => (
        <Rate
          key={pocketsInfo[code].code}
          selectedCode={selected}
          name={pocketsInfo[code].name}
          amount={rates[code]}
        />
      ))}
    </div>
  </div>
);

export default connect(state => ({
  currenciesList: filterCurrencyCodes(
    selectPocketsList(state),
    selectedPocket(state)
  ),
  pocketsInfo: selectPocketsInfo(state),
  rates: selectedRates(state),
  selected: selectedPocket(state)
}))(Rates);
