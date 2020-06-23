import React, { useContext } from 'react';

import { useLocation } from 'react-router-dom';
import globalContext from '../../context/globalContext';
import LineGraph from '../../components/LineGraph';

const index = () => {
  const GlobalContext = useContext(globalContext);
  const {
    data, getData, getContributions,
  } = GlobalContext;
  const location = useLocation();
  React.useEffect(() => {
    const getPathname = () => {
      console.log('location :>> ', location);
    };
    if (!data.wakatime && !data.github) {
      getData(location.pathname);
      getPathname();
    }
    getContributions('3fc693afb6e7a54f8476ed04a9e69e5fa213ba29', 'rukeni')
      .then((gql) => {
        console.log('gql gql:>> ', gql);
      }).catch((e) => console.log('gql network error', e));
  }, [location]);
  return (
    <>
      <div className="flex-1 w-full flex justify-end items-center min-h-screen">
        {/* TODO: 눌렀을때 해당 깃허브 히스토리와 연동하는건 어떨까? */ }
        <div className="w-2/5 flex justify-center items-center relative">
          <LineGraph data={data.wakatime} />
        </div>
      </div>
    </>
  );
};

export default index;
