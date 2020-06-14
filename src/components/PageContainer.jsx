import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const PageContainer = ({ children, isLightMode }) => (
  <div
    className={`flex flex-col justify-center items-center z-20 w-full relative min-h-screen ${isLightMode ? '' : 'text-white'}`}
    style={{
      transition: 'all .5s ease-in-out',
      backgroundColor: isLightMode ? 'transparent' : '#222',
    }}
  >
    { children }
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLightMode: PropTypes.bool.isRequired,
};
export default PageContainer;
