import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MoveToButton from '../../MoveToButton';
import {
  selectedPocket,
  selectedMoveTo,
  selectMoveTo,
  resetMoveTo
} from '../../../reducers/sections/pocketSelection';
import { getRates } from '../../../reducers/sections/rates';
import { filterCurrencyCodes } from '../../../utils';
import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';

class Exchange extends Component {
  componentDidMount() {
    this.props.getRates();
  }

  render() {
    const {
      selected,
      selectedMoveTo,
      exchangeToPockets,
      selectMoveTo,
      resetMoveTo
    } = this.props;

    return (
      <div>
        <nav
          className="navigation"
          role="navigation"
          aria-label="Main navigation">
          <Link to="/">
            <BackIcon className="icon" />
          </Link>
          <Link to="/rates">Rates</Link>
          <button>
            <ExchangeIcon className="icon icon-exchange" />
          </button>
        </nav>

        <h1 className="pageTitle">Exchange Page</h1>

        <div>
          <div className="exchange-box">
            <div>
              <span className="u-block">{selected}</span>
              <span className="u-block u-fontSizeSmall">You have zzz</span>
            </div>
            <div>Input here</div>
          </div>

          {selectedMoveTo ? (
            <div>
              <button
                className="change-pocket u-topMargin"
                onClick={resetMoveTo}>
                Change pocket
              </button>
            </div>
          ) : (
            <div>
              <p>Exchange to: </p>
              {exchangeToPockets.map(p => (
                <MoveToButton
                  key={p}
                  code={p}
                  onClick={() => selectMoveTo(p)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    selected: selectedPocket(state),
    selectedMoveTo: selectedMoveTo(state),
    exchangeToPockets: filterCurrencyCodes(
      state.pockets,
      state.pocketSelection.selected
    )
  }),
  { getRates, selectMoveTo, resetMoveTo }
)(Exchange);
