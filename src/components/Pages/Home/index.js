import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../../reducers/sections/counter';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import PocketButton from '../../PocketButton';

const Home = ({ pockets }) => (
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

const mapStateToProps = ({ pockets }) => ({
  pockets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
