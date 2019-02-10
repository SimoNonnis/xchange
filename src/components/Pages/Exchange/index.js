import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRates } from '../../../reducers/sections/rates';
import { ReactComponent as BackIcon } from '../../../icons/left-arrow.svg';
import { ReactComponent as ExchangeIcon } from '../../../icons/exchange.svg';

class Exchange extends Component {
  componentDidMount() {
    this.props.getRates();
  }

  render() {
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
      </div>
    );
  }
}

export default connect(
  null,
  { getRates }
)(Exchange);
