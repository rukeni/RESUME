import React, { useContext } from 'react';
import globalContext from '../../context/globalContext';

const index = () => {
  const GlobalContext = useContext(globalContext);
  const {
    data, getData, getContributions,
  } = GlobalContext;
  React.useEffect(() => {
    if (!data.wakatime && !data.github) {
      getData();
    }
    getContributions('a712dbd48676f850f16edfdfdc9fb2467c66dd83', 'rukeni')
      .then((gql) => {
        console.log('gql gql:>> ', gql);
      });
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
      <div className="relative md:ml-64 bg-gray-200">
        DashBoard
        <div>
          { data.wakatime && data.wakatime.map((el, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>
              <p>{ el.grand_total.digital }</p>
              <p>{ el.range.date }</p>
            </div>

          ))}
        </div>
      </div>
    </>
  );
};

export default index;
