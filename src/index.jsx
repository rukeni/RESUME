import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Redirect,
} from 'react-router-dom';

import './styles/tailwind.css';

import Global from './context/globalContext';
import GlobalProvider from './context/GlobalState';
import PageContainer from './components/PageContainer';

import Header from './components/Header';
import Footer from './components/Footer';

// import App from './pages';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';
import Email from './pages/Email';
import SideBar from './components/SideBar';

console.log('%c 리액트 컴포넌트 생성', 'color: blue; font-size: 1.5rem;');
console.time('앱 시작시간');

const App = () => (
  <GlobalProvider>
    <Global.Consumer>
      { ({
        isLogin, isLightMode, handleClick, login, pathname,
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
                <div className="flex w-full">
                  <SideBar pathname={pathname} />
                  <Redirect to="/" />
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/email" component={Email} />
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                </div>
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
                <SideBar />
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/email" component={Email} />
                <Route exact path="/login" component={Login} />
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
              </Router>
            ) }
          <Footer />
        </PageContainer>
      )}
    </Global.Consumer>
  </GlobalProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
console.timeEnd('앱 시작시간');
console.log('%c 리액트 컴포넌트 생성 완료', 'color: blue; font-size: 1.5rem;');
