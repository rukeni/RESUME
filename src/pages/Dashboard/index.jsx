import React, { useContext } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label,
} from 'recharts';

import globalContext from '../../context/globalContext';
import Dot from '../../components/Dot';

const index = () => {
  const GlobalContext = useContext(globalContext);
  const {
    data, getData, getContributions,
  } = GlobalContext;
  React.useEffect(() => {
    if (!data.wakatime && !data.github) {
      getData();
    }
    getContributions('3fc693afb6e7a54f8476ed04a9e69e5fa213ba29', 'rukeni')
      .then((gql) => {
        console.log('gql gql:>> ', gql);
      }).catch((e) => console.log('gql network error', e));
    // const res = Axios.get('https://api.github.com/users/rukeni')
    //   .then((c) => {
    //     console.log(c);
    //   });
    // console.log('res :>> ', res);
  }, []);
  // "grand_total": {
  //               "digital": "0:00",
  //               "hours": 0,
  //               "minutes": 0,
  //               "text": "0 secs",
  //               "total_seconds": 0
  //           },
  //           "range": {
  //               "date": "2020-06-11",
  //               "end": "2020-06-11T14:59:59Z",
  //               "start": "2020-06-10T15:00:00Z",
  //               "text": "Thu Jun 11th 2020",
  //               "timezone": "Asia/Dili"
  //           }
  return (
    <>
      <div className="relative md:ml-64 w-full">
        DashBoard
        <div>
          { data.wakatime && data.wakatime.map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>
              <p>{ el.totalTime }</p>
              <p>{ el.date }</p>
            </div>

          )) }
          <LineChart
            width={600}
            height={300}
            data={data.wakatime}
            margin={{
              top: 5, right: 20, left: 10, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="코딩시간" stroke="#8884d8" dot={Dot} />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default index;
