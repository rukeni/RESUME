import React from 'react';
import ReactDOM from 'react-dom';

import './styles/tailwind.css';
import App from './pages';

console.log('%c 리액트 컴포넌트 생성', 'color: blue; font-size: 1.5rem;');
console.time('앱 시작시간');
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root'),
);
console.timeEnd('앱 시작시간');
console.log('%c 리액트 컴포넌트 생성 완료', 'color: blue; font-size: 1.5rem;');
