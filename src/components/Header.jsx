import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Header = ({ isLightMode, handleClick }) => (
  <div className="flex flex-4 w-full justify-around sticky">
    <div
      className="flex-1 w-full border-box hover:text-indigo-500 text-center"
      style={{
        transition: 'all .2s ease-in-out',
      }}
    >
      <Link
        to="/login"
      >
        로그인
      </Link>
    </div>

    <button
      className="flex-1 w-full border-box"
      type="button"
      data-type="toggle"
      onClick={handleClick}
    >
      {isLightMode ? '다크 모드' : '라이트 모드'}
    </button>
  </div>
);

Header.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
