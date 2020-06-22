import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const PageContainer = ({ children, isLightMode, isContact }) => (
  <div
    className={`flex flex-col justify-center items-center z-20 w-full relative ${isContact ? 'opacity-75' : ''}`}
    style={{
      transition: 'all .5s ease-in-out',
      backgroundColor: isLightMode ? 'transparent' : '#222',
      color: isLightMode ? '#000' : '#fff',
    }}
  >
    { children }
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLightMode: PropTypes.bool.isRequired,
  isContact: PropTypes.bool.isRequired,
};
export default PageContainer;
