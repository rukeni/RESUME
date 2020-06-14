import React from 'react';

const Card = () => (
  <div className="flex-1 flex w-full p-6 justify-center items-center relative z-50 hover:bg-transparent">
    <span className="text-6xl font-sans font-extrabold">인간의 욕심은 끝이 없고... 나의 욕심도 끝이 없다</span>
    <div
      className="absolute z-10 opacity-0 hover:opacity-100"
      style={{
        width: '32%',
        height: '50%',
        transition: 'all .5s ease-in-out',
        top: '50%',
        right: '50%',
        margin: '0 auto',
        background: 'linear-gradient(220deg, #3d45b1, #844efc)',
      }}
    />
  </div>
);

export default Card;
