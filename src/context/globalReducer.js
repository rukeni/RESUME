import produce from 'immer';
import { SET_DATA } from './types';

export default (state, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_DATA:
    {
      draft.data = action.payload;
      break;
    }
    default:
      break;
  }
});
