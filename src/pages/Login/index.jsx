import React from 'react';

import Data from '../../context/globalContext';

import PageContainer from '../../components/PageContainer';
import Header from '../../components/Header';
import LoginCard from '../../domain/Login/LoginCard';
import Footer from '../../components/Footer';

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
          <LoginCard />
          <Footer />
        </PageContainer>
      )}
    </Data.Consumer>
  </>
);

export default Home;
