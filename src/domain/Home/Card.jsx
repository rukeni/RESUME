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
            style={{
              transition: 'all .3s ease',
            }}
          >
            욕심

          </span>
          도 끝이 없다
        </span>
        <div
          className={`w-full min-h-screen ${isHover ? 'opacity-75' : 'hidden'}`}
          style={{
            zIndex: '-100',
            position: 'absolute',
            minWidth: '100vw',
            minHeight: '100vh',
            transition: 'all .5s ease-in-out',
            background: 'linear-gradient(180deg, #3d45b1, #844efc)',
          }}
        />
      </div>
    )}

  </Data.Consumer>
);

export default Card;
