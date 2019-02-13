import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectPocketsList,
  selectPocketsInfo
} from '../../../reducers/sections/pockets';
import { selectPocketsAmount } from '../../../reducers/sections/pocketsAmount';
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
import MoveToButton from '../../MoveToButton';

class Exchange extends Component {
  state = {
    amountToMove: ''
  };

  componentDidMount() {
    this.props.getRates();
  }

  setAmountToMove = ({ target }) => {
    this.setState({
      amountToMove: target.value
    });
  };

  render() {
    const { amountToMove } = this.state;
    const {
      selected,
      pocketsInfo,
      pocketsAmount,
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
              <span className="u-block u-fontSizeSmall u-semiTransparent">
                You have {pocketsInfo[selected].symbol}{' '}
                {pocketsAmount[selected].amount}
              </span>
            </div>
            <div>
              <label className="u-hiddenVisually" htmlFor="amount">
                Amount to transfer from
              </label>
              {'−'}
              <input
                className="amount-input u-inlineBlock"
                type="number"
                id="amount"
                autoComplete="nope"
                autoFocus
                placeholder={0}
                value={amountToMove}
                onChange={this.setAmountToMove}
              />
            </div>
          </div>

          {selectedMoveTo ? (
            <div>
              <div className="exchange-box exchange-box--dark">
                <div>
                  <span className="u-block">{selectedMoveTo}</span>
                  <span className="u-block u-fontSizeSmall u-semiTransparent">
                    You have {pocketsInfo[selectedMoveTo].symbol}{' '}
                    {pocketsAmount[selectedMoveTo].amount}
                  </span>
                </div>
                <div>Amount</div>
              </div>
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
    pocketsInfo: selectPocketsInfo(state),
    pocketsAmount: selectPocketsAmount(state),
    selected: selectedPocket(state),
    selectedMoveTo: selectedMoveTo(state),
    exchangeToPockets: filterCurrencyCodes(
      selectPocketsList(state),
      selectedPocket(state)
    )
  }),
  { getRates, selectMoveTo, resetMoveTo }
)(Exchange);
