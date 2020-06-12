import React from 'react';

import Data from '../context/globalContext';
import Header from '../components/Header';
import Card from '../domain/Home/Card';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

const index = () => (
  <>
    <Data.Consumer>
      { ({ data, isLightMode, handleClick }) => (
        <PageContainer
          isLightMode={isLightMode}
        >
          <Header
            data={data}
            isLightMode={isLightMode}
            handleClick={handleClick}
          />
          <Card />
          <Footer />
        </PageContainer>
      )}
    </Data.Consumer>
  </>
);

export default index;
