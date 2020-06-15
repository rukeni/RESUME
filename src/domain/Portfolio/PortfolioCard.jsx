/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

import Data from '../../context/globalContext';

const PortfolioCard = () => (
  <div
    className="flex-1 flex justify-center text-center items-center opacity-75"
  >

    <Data.Consumer>
      { ({ isHover, handleMouseOver, handleMouseOut }) => (
        <>
          <span
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            포트폴리오 카드

          </span>
          <div
            className={isHover === true ? 'opacity-0' : 'opacity-100'}
          >
            {/* TODO: 텍스트 마우스 오버시에 비디오 재생하고 있는 부분 보여주는 로직 필요  */}
            {/* TODO: 비디오는 전체 화면으로 해두고 화면만 opacity 0으로 주면 될듯 -> 슬라이더로 해결? */ }
            /
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              autoPlay
              muted
              loop
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
              width="250"
              height="250"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
            <track />
          </div>

        </>
      )}

    </Data.Consumer>
  </div>
);

export default PortfolioCard;
