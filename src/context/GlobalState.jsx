import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import { SET_IS_LIGHT_MODE, SET_AUTH, SET_IS_LOGIN } from './types';

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
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        isLightMode: state.isLightMode,
        login: state.login,
        isLogin: state.isLogin,
        handleClick,
        handleChange,
        handleSubmit,
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
