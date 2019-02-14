import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectPocketsList,
  selectPocketsInfo
} from '../../../reducers/sections/pockets';
import {
  selectPocketsAmount,
  addToPocket,
  removeFromPocket
} from '../../../reducers/sections/pocketsAmount';
import {
  selectedPocket,
  selectedMoveTo,
  selectMoveTo,
  resetMoveTo
} from '../../../reducers/sections/pocketSelection';
import { getRates, selectedRates } from '../../../reducers/sections/rates';
import { filterCurrencyCodes, calculateExchange } from '../../../utils';
import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import MoveToButton from '../../MoveToButton';

class Exchange extends Component {
  static propTypes = {
    pocketsInfo: PropTypes.object.isRequired,
    pocketsAmount: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    rates: PropTypes.object.isRequired,
    selectedMoveTo: PropTypes.string,
    exchangeToPockets: PropTypes.array.isRequired,
    getRates: PropTypes.func,
    selectMoveTo: PropTypes.func,
    resetMoveTo: PropTypes.func,
    addToPocket: PropTypes.func,
    removeFromPocket: PropTypes.func
  };

  static defaultProps = {
    getRates: () => undefined,
    selectMoveTo: () => undefined,
    resetMoveTo: () => undefined,
    addToPocket: () => undefined,
    removeFromPocket: () => undefined
  };

  state = {
    amountToMove: '',
    amountExchanged: ''
  };

  componentDidMount() {
    this.props.getRates();
  }

  componentDidUpdate(prevProps) {
    const { selectedMoveTo, rates } = this.props;

    if (prevProps.selectedMoveTo !== selectedMoveTo) {
      const amountExchanged = calculateExchange(
        this.state.amountToMove,
        rates[selectedMoveTo]
      );

      this.setState({
        amountExchanged
      });
    }
  }

  setAmountToMove = ({ target }) => {
    const amount = Number(target.value).toFixed(2);
    const { selectedMoveTo, rates } = this.props;

    if (selectedMoveTo) {
      const amountExchanged = calculateExchange(amount, rates[selectedMoveTo]);

      this.setState({
        amountToMove: amount,
        amountExchanged
      });
    } else {
      this.setState({
        amountToMove: amount
      });
    }
  };

  handleAddToPocket = () => {
    const {
      addToPocket,
      removeFromPocket,
      selectedMoveTo,
      selected
    } = this.props;

    addToPocket(selectedMoveTo, Number(this.state.amountExchanged));
    removeFromPocket(selected, Number(this.state.amountToMove));
    this.setState({
      amountToMove: '',
      amountExchanged: ''
    });
  };

  disableExchange = () =>
    !this.state.amountToMove || this.props.selectedMoveTo === undefined;

  render() {
    const { amountToMove, amountExchanged } = this.state;
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
        </nav>

        <h1 className="pageTitle">Exchange Page</h1>

        <div>
          <div className="exchange-box">
            <div>
              <span className="u-block u-textLeft">{selected}</span>
              <span className="u-block u-fontSizeSmall u-semiTransparent">
                You have {pocketsInfo[selected].symbol}{' '}
                {pocketsAmount[selected].amount}
              </span>
            </div>
            <div>
              <label className="u-hiddenVisually" htmlFor="amount">
                Amount to transfer from
              </label>

              <div
                className={`u-positionRelative ${
                  amountToMove.length ? 'amount-input-container' : ''
                }`}>
                <input
                  className="amount-input u-inlineBlock"
                  type="number"
                  id="amount"
                  autoComplete="nope"
                  autoFocus
                  placeholder={0}
                  min="0"
                  value={amountToMove}
                  onChange={this.setAmountToMove}
                  style={{ width: `${amountToMove.length + 5}ch` }}
                />
              </div>
            </div>
          </div>

          {selectedMoveTo ? (
            <div>
              <div className="exchange-box exchange-box--dark">
                <div>
                  <span className="u-block u-textLeft">{selectedMoveTo}</span>
                  <span className="u-block u-fontSizeSmall u-semiTransparent">
                    You have {pocketsInfo[selectedMoveTo].symbol}{' '}
                    {pocketsAmount[selectedMoveTo].amount}
                  </span>
                </div>
                <div>{amountExchanged ? `+ ${amountExchanged}` : ''}</div>
              </div>
              <div className="controls-container">
                <button
                  className="u-inlineBlock u-topMargin"
                  disabled={this.disableExchange()}
                  onClick={this.handleAddToPocket}>
                  <ExchangeIcon
                    className={`icon icon--big icon-exchange  ${
                      this.disableExchange() ? 'icon-exchange--disabled' : ''
                    }`}
                  />
                </button>
                <button
                  className="change-pocket u-topMargin u-inlineBlock"
                  onClick={resetMoveTo}>
                  Change pocket
                </button>
              </div>
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
    rates: selectedRates(state),
    selectedMoveTo: selectedMoveTo(state),
    exchangeToPockets: filterCurrencyCodes(
      selectPocketsList(state),
      selectedPocket(state)
    )
  }),
  { getRates, selectMoveTo, resetMoveTo, addToPocket, removeFromPocket }
)(Exchange);
