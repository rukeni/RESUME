import React from 'react';

const Card = () => (
  <div className="flex-1 flex w-full p-6 justify-center items-center relative z-50 hover:bg-transparent">
    <button
      className="absolute"
      type="button"
      style={{
        top: '0',
        right: '0',
      }}
    >
      적용
    </button>
    <span>인간의 욕심은 끝이 없고... 나의 욕심도 끝이 없다</span>
  </div>
);

export default Card;
