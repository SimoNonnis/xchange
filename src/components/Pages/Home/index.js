import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectPocketsList,
  selectPocketsInfo
} from '../../../reducers/sections/pockets';
import { selectPocketsAmount } from '../../../reducers/sections/pocketsAmount';
import {
  selectPocket,
  selectedPocket
} from '../../../reducers/sections/pocketSelection';
import {
  selectIsPolling,
  getRates,
  pollingStop
} from '../../../reducers/sections/rates';

import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';
import PocketButton from '../../PocketButton';

const propTypes = {
  pocketsList: PropTypes.array.isRequired,
  pocketsInfo: PropTypes.object.isRequired,
  pocketsAmount: PropTypes.object.isRequired,
  isPolling: PropTypes.bool,
  selectPocket: PropTypes.func,
  getRates: PropTypes.func,
  pollingStop: PropTypes.func
};

const defaultProps = {
  isPolling: false,
  selectPocket: () => undefined,
  getRates: () => undefined,
  pollingStop: () => undefined
};

export const Home = ({
  pocketsList,
  pocketsInfo,
  pocketsAmount,
  selectedPocket,
  selectPocket,
  isPolling,
  getRates,
  pollingStop
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
          onClick={() => {
            const code = pocketsInfo[p].code;

            selectPocket(code);

            if (isPolling) pollingStop();

            getRates(pocketsList, code);
          }}
        />
      ))}
    </div>

    <div className="u-topMargin">
      {selectedPocket ? (
        <Link to="/exchange">
          <ExchangeIcon className="icon icon-exchange" />
        </Link>
      ) : (
        <span>Select your pocket ↑</span>
      )}
    </div>
  </div>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(
  state => ({
    pocketsList: selectPocketsList(state),
    pocketsInfo: selectPocketsInfo(state),
    pocketsAmount: selectPocketsAmount(state),
    selectedPocket: selectedPocket(state),
    isPolling: selectIsPolling(state)
  }),
  { selectPocket, getRates, pollingStop }
)(Home);
