import React, { useContext } from 'react';

import globalContext from '../../context/globalContext';
import LineGraph from '../../components/LineGraph';

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
  }, []);
  return (
    <>
      <div className="flex-1 w-full">
        <div>
          {/* TODO: 눌렀을때 해당 깃허브 히스토리와 연동하는건 어떨까? */ }
          <LineGraph data={data.wakatime} />
        </div>
      </div>
    </>
  );
};

export default index;
