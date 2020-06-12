import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import { SET_IS_LIGHT_MODE } from './types';

const GlobalState = ({ children }) => {
  const initialState = {
    data: null,
    isLightMode: true,
  };
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const handleClick = (e) => {
    e.preventDefault();
    const { type } = e.target.dataset;

    switch (type) {
      case 'toggle':
        dispatch({
          type: SET_IS_LIGHT_MODE,
        });
        break;
      default:
        break;
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        isLightMode: state.isLightMode,
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
