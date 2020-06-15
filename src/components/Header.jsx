import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const Header = ({
  isLogin, isLightMode, handleClick, LoginName, isHover,
}) => (
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
            className={isHover ? 'text-white' : ''}
          >
            메인으로
          </button>
        )
        : (
          <Link
            to="/login"
            className={isHover ? 'text-white' : ''}
          >
            포트폴리오 보기
          </Link>
        )}

    </div>
    { isLogin ? (
      <p
        className={`flex-1 w-full border-box flex justify-center items-center ${isHover ? 'text-white' : ''}`}
      >
        { `반갑습니다. ${LoginName}님` }
        {' '}
        &#128526;
      </p>
    ) : ''}

    <Toggle
      isHover={isHover}
      isLightMode={isLightMode}
      handleClick={handleClick}
    />
  </div>
);

Header.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  isHover: PropTypes.bool.isRequired,
  LoginName: PropTypes.string,
};

Header.defaultProps = {
  LoginName: '',
};
export default Header;
