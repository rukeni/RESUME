import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import {
  SET_IS_LIGHT_MODE, SET_AUTH, SET_IS_LOGIN, SET_IS_HOVER, SET_SLIDER,
} from './types';

const GlobalState = ({ children }) => {
  console.log('children :>> ', children);
  const initialState = {
    data: null,
    isLightMode: true,
    login: {
      id: '',
      password: '',
    },
    isLogin: false,
    isHover: false,
  };
  const [state, dispatch] = useReducer(globalReducer, initialState);

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
    const { type } = e.currentTarget.dataset;

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
    // e.preventDefault();
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
    // e.preventDefault();
    console.log('mouseout');
    console.log('state.isHover :>> ', state.isHover);
    // e.target.pause();
    // e.preventDefault();
    dispatch({
      type: SET_IS_HOVER,
      payload: 'mouseOut',
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        isLightMode: state.isLightMode,
        login: state.login,
        isLogin: state.isLogin,
        isHover: state.isHover,
        handleClick,
        handleChange,
        handleSubmit,
        handleMouseOver,
        handleMouseOut,
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
