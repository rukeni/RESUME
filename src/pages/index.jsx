import React from 'react';

import Card from '../domain/Home/Card';

const index = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log('document.documentElement.scrollTop :>> ', document.documentElement.scrollTop);
      console.log('e.target.documentElement.scrollTop :>> ', e.target.documentElement.scrollTop);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('document.documentElement.scrollTop end:>> ', document.documentElement.scrollTop);
      });
    };
  });
  return (
    <>
      <Card />
    </>
  );
};

export default index;
