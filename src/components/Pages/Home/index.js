import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectPocketsList,
  selectPocketsInfo,
  selectPocketsIsDisabled
} from '../../../reducers/sections/pockets';
import { selectPocketsAmount } from '../../../reducers/sections/pocketsAmount';
import {
  selectPocket,
  selectedPocket
} from '../../../reducers/sections/pocketSelection';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import PocketButton from '../../PocketButton';

const Home = ({
  pocketsList,
  pocketsInfo,
  pocketsIsDisabled,
  pocketsAmount,
  selectedPocket,
  selectPocket
}) => (
  <div>
    <h1 className="pageTitle">Pockets</h1>
    <div>
      {pocketsList.map(p => (
        <PocketButton
          key={pocketsInfo[p].code}
          className="buttonPocket"
          code={pocketsInfo[p].code}
          name={pocketsInfo[p].name}
          symbol={pocketsInfo[p].symbol}
          amount={pocketsAmount[p].amount}
          isSelected={p === selectedPocket}
          isDisabled={pocketsIsDisabled[p].isDisabled}
          onClick={() => selectPocket(pocketsInfo[p].code)}
        />
      ))}
    </div>

    <div className="u-topMargin">
      <Link to="/exchange">
        <ExchangeIcon className="icon icon-exchange" />
      </Link>
    </div>
  </div>
);
export default connect(
  state => ({
    pocketsList: selectPocketsList(state),
    pocketsInfo: selectPocketsInfo(state),
    pocketsIsDisabled: selectPocketsIsDisabled(state),
    pocketsAmount: selectPocketsAmount(state),
    selectedPocket: selectedPocket(state)
  }),
  { selectPocket }
)(Home);
