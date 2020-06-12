import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Header = ({ data, isLightMode, handleClick }) => (
  <div className="flex flex-5 w-full justify-around sticky">
    <button
      className="h-4"
      type="button"
      data-type="data"
      onClick={handleClick}
    >
      { data || '입력없음' }
    </button>
    <button
      className="h-4"
      type="button"
      data-type="toggle"
      onClick={handleClick}
    >
      {isLightMode ? '라이트 모드' : '다크 모드'}
    </button>
  </div>
);

Header.propTypes = {
  data: PropTypes.string.isRequired,
  isLightMode: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Header;
