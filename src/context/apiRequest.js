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
      console.log('stats.data', stats.data);
      console.log('데이터 요청 성공');
      const result = stats.data.map((el) => ({
        코딩시간: el.grand_total.hours + +(el.grand_total.minutes / 60).toFixed(1),
        date: el.range.date,
      }));
      console.log('result :>> ', result);
      dispatch({
        type: SET_DATA,
        payload: {
          data: result,
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

export const getContributions = async (token, username) => {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  };
  const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers });
  const data = await response.json();
  return data;
};
