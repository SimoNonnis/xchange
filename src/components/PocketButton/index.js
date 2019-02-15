import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: () => undefined
};

const PocketButton = ({ code, name, symbol, amount, isSelected, onClick }) => (
  <button
    className={`buttonPocket u-fontSizeSmall ${
      isSelected ? '' : 'u-semiTransparent'
    }`}
    disabled={isSelected}
    onClick={onClick}>
    <div className={`${isSelected ? 'isSelectedPocket' : ''}`}>
      <span>{symbol}</span>
      <span>{amount}</span>
    </div>
    {isSelected && (
      <div className="buttonPocketInfo">
        <span>{code}</span> - <span>{name}</span>
      </div>
    )}
  </button>
);

PocketButton.propTypes = propTypes;
PocketButton.defaultProps = defaultProps;

export default PocketButton;
