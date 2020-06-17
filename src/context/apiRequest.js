/* eslint-disable import/prefer-default-export */
import jsonp from 'jsonp';
import Axios from 'axios';
import { WAKA_CODING_STATS, GITHUB_STATUS } from '../net';
import { SET_DATA } from './types';

export const readData = async (dispatch) => {
  console.log('readData까지는 옴');
  await jsonp(WAKA_CODING_STATS, null, (err, stats) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(stats);
      console.log('데이터 요청 성공');
      dispatch({
        type: SET_DATA,
        payload: {
          data: stats.data,
          property: 'wakatime',
        },
      });
    }
  });
  await Axios.get(GITHUB_STATUS).then((status) => {
    dispatch({
      type: SET_DATA,
      payload: {
        data: status.data,
        property: 'github',
      },
    });
  });
};
