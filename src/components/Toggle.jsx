/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Toggle = ({ isLightMode, handleClick }) => (
  <button
    type="button"
    data-type="toggle"
    className={`flex-1 w-full border-box flex justify-center items-center switch ${isLightMode ? 'on' : ''}`}
    onClick={handleClick}
  >
    <label>다크 모드</label>
    <div className="knob" />
    <label>라이트 모드</label>
  </button>
);

Toggle.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Toggle;
