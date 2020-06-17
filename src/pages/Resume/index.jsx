import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Resume from './Resume';

const index = ({ children }) => {
  const history = [
    { year: 1990, desc: '태어남' },
    { year: 1998, desc: '초등학교' },
    { year: 2002, desc: '2002년 월드컵' },
    { year: 2009, desc: '수능' },
    { year: 2018, desc: '개발자 시작' },
    { year: 2020, desc: '현재' },
  ];
  const { url } = useRouteMatch();
  return (
    <div>
      카드 뉴스형식의 자기소개서
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
            </>
          ))}
        </ul>
      </>
      { children }
      <Switch>
        <Route path={`${url}/:id`}>
          <Resume />
        </Route>
      </Switch>
    </div>
  );
};

export default index;
