import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  code: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: () => undefined
};

const MoveToButton = ({ code, onClick }) => (
  <button className="move-to-button" onClick={onClick}>
    {code}
  </button>
);

MoveToButton.propTypes = propTypes;
MoveToButton.defaultProps = defaultProps;

export default MoveToButton;
