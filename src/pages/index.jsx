import React from 'react';

import Data from '../context/globalContext';

const index = () => (
  <div className="bg-red-500">
    Home
    <Data.Consumer>
      { ({ data, handleClick }) => (
        <button
          type="button"
          onClick={handleClick}
        >
          { data || '입력없음' }

        </button>
      )}

    </Data.Consumer>
  </div>
);

export default index;
