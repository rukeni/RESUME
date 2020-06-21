import React, { useContext } from 'react';

import { useLocation } from 'react-router-dom';

import globalContext from '../../context/globalContext';
import PortfolioCard from '../../domain/Portfolio/PortfolioCard';

const index = () => {
  const GlobalContext = useContext(globalContext);
  const { setPathname } = GlobalContext;
  const location = useLocation();
  React.useEffect(() => {
    setPathname(location.pathname);
  }, []);
  return (
    <>
      <PortfolioCard />
    </>
  );
};

export default index;
