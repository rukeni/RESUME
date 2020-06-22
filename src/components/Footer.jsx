import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ isContact, handleClick }) => (
  <div className="flex-5 flex justify-end items-end">
    <button
      type="button"
      onClick={handleClick}
      data-type="setModal"
      className="z-50"
    >
      { isContact === true ? '끄기' : '연락하기'}
    </button>
  </div>
);
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isContact: PropTypes.bool.isRequired,
};
export default Footer;
