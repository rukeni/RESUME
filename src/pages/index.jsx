import React from 'react';

import Data from '../context/globalContext';

const index = () => (
  <div classNameName="bg-red-500">
    Home
    <Data.Consumer>
      { ({ data, isLightMode, handleClick }) => (
        <div
          className={`flex flex-col w-full min-h-screen ${isLightMode ? '' : 'bg-black opacity-75 text-white'}`}
          style={{
            transition: 'all .5s ease-in-out',
          }}
        >
          <button
            type="button"
            data-type="data"
            onClick={handleClick}
          >
            { data || '입력없음' }
          </button>
          <button
            type="button"
            data-type="toggle"
            onClick={handleClick}
          >
            {isLightMode ? '라이트 모드' : '다크 모드'}
          </button>
        </div>
      )}

    </Data.Consumer>
  </div>
);

export default index;
