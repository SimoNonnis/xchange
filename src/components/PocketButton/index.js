import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired
};

const PocketButton = ({ code, name, symbol, amount, isSelected }) => (
  <button className={`buttonPocket ${isSelected ? 'isSelected' : ''}`}>
    {code}
    {name}
    {symbol}
    {amount}
    {isSelected}
  </button>
);

PocketButton.propTypes = propTypes;

export default PocketButton;
