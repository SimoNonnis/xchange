import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectPocket,
  selectedPocket
} from '../../../reducers/sections/pocketSelection';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import PocketButton from '../../PocketButton';

const Home = ({ pockets, selectPocket, selectedPocket }) => (
  <div>
    <h1 className="pageTitle">Pockets</h1>
    <div>
      {pockets.map(p => (
        <PocketButton
          key={p.code}
          className="buttonPocket"
          code={p.code}
          name={p.name}
          symbol={p.symbol}
          amount={p.amount}
          isSelected={p.code === selectedPocket}
          isDisabled={p.isDisabled}
          onClick={() => selectPocket(p.code)}
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
    pockets: state.pockets,
    selectedPocket: selectedPocket(state)
  }),
  { selectPocket }
)(Home);
