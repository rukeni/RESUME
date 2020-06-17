import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './styles/tailwind.css';
import App from './pages';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ResumeContents from './pages/Resume/Resume';
import Global from './context/globalContext';
import GlobalProvider from './context/GlobalState';
import PageContainer from './components/PageContainer';
import Header from './components/Header';
import Footer from './components/Footer';

console.log('%c 리액트 컴포넌트 생성', 'color: blue; font-size: 1.5rem;');
console.time('앱 시작시간');
ReactDOM.render(
  <GlobalProvider>
    <Global.Consumer>
      { ({
        isLogin, isLightMode, handleClick, login,
      }) => (
        <PageContainer
          isLightMode={isLightMode}
        >
          { isLogin === true
            ? (
              <Router>
                <Header
                  isLightMode={isLightMode}
                  handleClick={handleClick}
                  isLogin={isLogin}
                  LoginName={login.id}
                />
                <Redirect to="/" />
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/resume">
                  <Redirect to="/resume/1990" />
                </Route>
                <Route path="/resume/:year">
                  <Resume>
                    <ResumeContents />
                  </Resume>
                </Route>
              </Router>
            )
            : (
              <Router>
                <Header
                  isLightMode={isLightMode}
                  handleClick={handleClick}
                  isLogin={isLogin}
                  LoginName={login.id}
                />
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/resume">
                  <Redirect to="/resume/1990" />
                </Route>
                <Route path="/resume/:year">
                  <Resume>
                    <ResumeContents />
                  </Resume>
                </Route>
              </Router>
            ) }
          <Footer />
        </PageContainer>
      )}
    </Global.Consumer>
  </GlobalProvider>,
  document.getElementById('root'),
);
console.timeEnd('앱 시작시간');
console.log('%c 리액트 컴포넌트 생성 완료', 'color: blue; font-size: 1.5rem;');
