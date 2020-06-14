import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const Header = ({ isLogin, isLightMode, handleClick }) => (
  <div className="flex flex-4 w-full justify-around sticky">
    <div
      className="flex-1 w-full border-box hover:text-indigo-500 text-center"
      style={{
        transition: 'all .2s ease-in-out',
      }}
    >
      { isLogin
        ? (
          <button
            type="button"
            onClick={handleClick}
            data-type="logout"
          >
            메인으로
          </button>
        )
        : (
          <Link
            to="/login"
          >
            포트폴리오 보기
          </Link>
        )}

    </div>
    <Toggle
      isLightMode={isLightMode}
      handleClick={handleClick}
    />
  </div>
);

Header.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Header;
