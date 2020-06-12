import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const PageContainer = ({ children, isLightMode }) => (
  <div
    className={`flex flex-col justify-center items-center w-full min-h-screen ${isLightMode ? '' : 'bg-black opacity-75 text-white'}`}
    style={{
      transition: 'all .5s ease-in-out',
    }}
  >
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
  isLightMode: PropTypes.bool.isRequired,
};
PageContainer.defaultProps = {
  children: {},
};
export default PageContainer;
