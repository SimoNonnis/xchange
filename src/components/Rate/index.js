import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  selectedCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number
};

const defaultProps = {
  amount: 0
};

const Rate = ({ selectedCode, name, amount }) => (
  <div className="rate">
    <span>1 {selectedCode}</span>
    <div>
      <span className="u-block">{amount}</span>
      <span className="u-block">{name}</span>
    </div>
  </div>
);

Rate.propTypes = propTypes;
Rate.defaultProps = defaultProps;

export default Rate;
