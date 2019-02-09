import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRates } from '../../../reducers/sections/rates';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import PocketButton from '../../PocketButton';

const Home = ({ pockets, getRates }) => (
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
          isSelected={p.isSelected}
          isDisabled={p.isDisabled}
          onClick={() => getRates(p.code)}
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
  ({ pockets }) => ({
    pockets
  }),
  { getRates }
)(Home);
