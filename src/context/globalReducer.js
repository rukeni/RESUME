import produce from 'immer';
import { SET_DATA, SET_IS_LIGHT_MODE } from './types';

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

    default:
      break;
  }
});
