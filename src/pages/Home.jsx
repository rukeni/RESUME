import React from 'react';

import Data from '../context/globalContext';
import Header from '../components/Header';
import Card from '../domain/Home/Card';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

const Home = () => (
  <>
    <Data.Consumer>
      { ({ isLightMode, handleClick }) => (
        <PageContainer
          isLightMode={isLightMode}
        >
          <Header
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

export default Home;
