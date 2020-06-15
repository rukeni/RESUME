import React from 'react';

import Data from '../../context/globalContext';

const Card = () => (
  <Data.Consumer>
    { ({ isHover, handleMouseOver, handleMouseOut }) => (
      <div className="flex-1 flex w-full p-6 justify-center items-center relative z-50 hover:bg-transparent">
        <span className="text-6xl font-sans font-extrabold">
          인간의 욕심은 끝이 없고... 나의
          { ' ' }
          {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          <span
            className={`cursor-pointer ${isHover ? 'text-white' : 'text-indigo-500'}`}
            data-type="hover"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            욕심

          </span>
          도 끝이 없다
        </span>
        <div
          className={`w-full min-h-screen ${isHover ? 'opacity-75' : 'opacity-0'}`}
          style={{
            zIndex: '-10',
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'all .5s ease-in-out',
            background: 'linear-gradient(220deg, #3d45b1, #844efc)',
          }}
        />
      </div>
    )}

  </Data.Consumer>
);

export default Card;
