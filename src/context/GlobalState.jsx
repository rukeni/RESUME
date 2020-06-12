import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import { SET_DATA } from './types';

const GlobalState = ({ children }) => {
  const initialState = {
    data: null,
  };
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_DATA,
      payload: 1,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        handleClick,
      }}
    >
      {children}

    </GlobalContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};
GlobalState.defaultProps = {
  children: {},
};
export default GlobalState;
