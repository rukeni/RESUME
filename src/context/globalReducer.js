import produce from 'immer';
import {
  SET_DATA, SET_IS_LIGHT_MODE, SET_AUTH, SET_IS_LOGIN, SET_IS_HOVER,
} from './types';

export default (state, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_DATA:
    {
      draft.data = action.payload;
      break;
    }
    case SET_IS_LIGHT_MODE:
    {
      draft.isLightMode = !state.isLightMode;
      break;
    }
    case SET_AUTH:
    {
      const { property, value } = action.payload;
      draft.login[property] = value;
      break;
    }
    case SET_IS_LOGIN:
    {
      if (state.login.id && state.login.password) {
        draft.isLogin = !state.isLogin;
        console.log('%c login성공', 'color: red; font-weight: 900;');
      }
      break;
    }
    case SET_IS_HOVER:
    {
      const type = action.payload;
      if (type === 'mouseOver') {
        console.log('호버되야함');
        draft.isHover = true;
      } else {
        draft.isHover = false;
      }
      break;
    }
    default:
      break;
  }
});
