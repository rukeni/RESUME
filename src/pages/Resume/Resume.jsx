import React from 'react';

import {
  useParams, Link, useRouteMatch, Switch, Route,
} from 'react-router-dom';
// TODO: 인풋체크 표시를 하면 해당 연도들은 전부 보여주는 로직

import Data from '../../context/globalContext';

const Resume = () => {
  const history = [
    { year: 1990, desc: '태어남' },
    { year: 1998, desc: '초등학교' },
    { year: 2002, desc: '2002년 월드컵' },
    { year: 2009, desc: '수능' },
    { year: 2018, desc: '개발자 시작' },
    { year: 2020, desc: '현재' },
  ];
  const { year } = useParams();
  const { url } = useRouteMatch();
  return (
    <>
      <div>
        카드 뉴스형식의 자기소개서
        <Data.Consumer>
          {({ handleClick }) => (
            <>
              <ul>
                { history.map((el) => (
                  <>
                    <span key={el.year}>
                      <Link to={`${url}/${el.year}`}>
                        {' '}
                        { el.year }
                        {' '}
                      </Link>
                    </span>
                    <button
                      type="button"
                      data-url={el.year}
                      className="bg-indigo-700"
                      data-type="navigate"
                      onClick={handleClick}
                    >
                      {el.year}
                    </button>
                  </>
                ))}
              </ul>
            </>
          )}
        </Data.Consumer>
        <p>
          { year ? (
            `${year}년`) : '연도를 입력하세요' }
        </p>
        <p>
          { +year < 1990 ? (
            <p>태어나기 이전임</p>
          ) : ''}

        </p>
        <Switch>
          <Route path={`${url}/:id`}>
            <Resume />
          </Route>
        </Switch>
      </div>

    </>
  );
};

export default Resume;
