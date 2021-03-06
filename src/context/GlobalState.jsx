import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import {
  SET_IS_LIGHT_MODE, SET_AUTH, SET_IS_LOGIN, SET_IS_HOVER, SET_PATHNAME, SET_MODAL,
} from './types';
import { readData, getContributions } from './apiRequest';

const GlobalState = ({ children }) => {
  console.log('children :>> ', children);
  const initialState = {
    data: {
      wakatime: null,
      github: null,
    },
    isLightMode: true,
    login: {
      id: '',
      password: '',
    },
    isLogin: false,
    isHover: false,
    isContact: false,
    pathname: '',
  };
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getData = (pathname) => {
    console.log('getData까지는 옴');
    readData(dispatch);
    dispatch({
      type: SET_PATHNAME,
      payload: pathname,
    });
  };
  const setPathname = (pathname) => {
    console.log('pathname :>> ', pathname);
    dispatch({
      type: SET_PATHNAME,
      payload: pathname,
    });
  };
  const handleChange = (e) => {
    const { property } = e.target.dataset;
    const { value } = e.target;
    console.log('value', value);
    console.log('property :>> ', property);
    console.log('state.login :>> ', state.login);
    dispatch({
      type: SET_AUTH,
      payload: {
        property,
        value,
      },
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { type, href, position } = e.currentTarget.dataset;
    switch (type) {
      case 'toggle':
        console.log('토글발생');
        dispatch({
          type: SET_IS_LIGHT_MODE,
        });
        break;
      case 'logout':
        dispatch({
          type: SET_IS_LOGIN,
        });
        break;
      case 'navigate':
        console.log('navigate');
        dispatch({
          type: SET_PATHNAME,
          payload: href,
        });
        break;
      case 'setModal':
        console.log('position :>> ', position);
        dispatch({
          type: SET_MODAL,
          payload: !state.isContact,
        });
        break;
      case 'blur':
        if (e.target === e.currentTarget) {
          console.log('blur');
          dispatch({
            type: SET_MODAL,
            payload: false,
          });
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_IS_LOGIN,
    });
  };
  const handleMouseOver = (e) => {
    e.preventDefault();
    // const { type } = e.target.dataset;
    console.log('mouseover');

    dispatch({
      type: SET_IS_HOVER,
      payload: 'mouseOver',
    });
    // e.target.play();
    // e.preventDefault();
  };
  const handleMouseOut = (e) => {
    // const { type } = e.target.dataset;
    e.preventDefault();
    console.log('mouseout');
    console.log('state.isHover :>> ', state.isHover);
    // e.target.pause();
    // e.preventDefault();
    dispatch({
      type: SET_IS_HOVER,
      payload: 'mouseOut',
    });
  };
  const handleScroll = (e) => {
    e.preventDefault();
    console.log('e.currentTarget.scrollLeft :>> ', e.currentTarget.scrollLeft);
    console.log('스크롤 이벤트 발생');
    console.log('window.scrollTop :>> ', window.scrollTop);
  };
  const handleBlur = (e) => {
    // e.preventDefault();
    console.log('blur');
    if (e.target === e.currentTarget) {
      dispatch({
        type: SET_MODAL,
        payload: false,
      });
    }
  };
  const handleFocus = (e) => {
    // e.preventDefault();
    if (e.target === e.currentTarget) {
      dispatch({
        type: SET_MODAL,
        payload: true,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        isLightMode: state.isLightMode,
        login: state.login,
        isLogin: state.isLogin,
        isHover: state.isHover,
        isContact: state.isContact,
        pathname: state.pathname,
        getData,
        setPathname,
        getContributions,
        handleClick,
        handleChange,
        handleSubmit,
        handleMouseOver,
        handleMouseOut,
        handleScroll,
        handleBlur,
        handleFocus,
      }}
    >
      {children}

    </GlobalContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalState;
