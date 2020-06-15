import React from 'react';

import { useParams, Link } from 'react-router-dom';
// TODO: 인풋체크 표시를 하면 해당 연도들은 전부 보여주는 로직
const index = () => {
  const history = [
    { year: 1990, desc: '태어남' },
    { year: 1998, desc: '초등학교' },
    { year: 2002, desc: '2002년 월드컵' },
    { year: 2009, desc: '수능' },
    { year: 2018, desc: '개발자 시작' },
    { year: 2020, desc: '현재' },
  ];
  const { year } = useParams();
  return (
    <div>
      카드 뉴스형식의 자기소개서
      <ul>
        { history.map((el) => (
          <span key={el.year}>
            <Link to={`/resume/${el.year}`}>
              {' '}
              { el.year }
              {' '}
            </Link>
          </span>
        ))}
      </ul>
      <p>
        { year ? (
          `${year}년`) : '연도를 입력하세요' }
      </p>
      <p>
        { +year < 1990 ? (
          <p>태어나기 이전임</p>
        ) : ''}

      </p>
    </div>
  );
};

export default index;
