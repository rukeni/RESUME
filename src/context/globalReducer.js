import produce from 'immer';
import {
  SET_DATA, SET_IS_LIGHT_MODE, SET_AUTH, SET_IS_LOGIN,
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
      draft.isLogin = true;
      break;
    }
    default:
      break;
  }
});
