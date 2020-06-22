import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ isContact, handleClick }) => (
  <div className="flex-5 flex justify-end items-end">
    <button
      type="button"
      onClick={handleClick}
      data-type="setModal"
      className="z-50 p-2 w-20 rounded-md outline-none bg-indigo-500 text-white"
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
