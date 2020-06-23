/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

const EmailForm = ({ isContact }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('rukeni', 'template_aClw4gSs', e.target, 'user_9p2DFbB7frndQ2kvqkFfR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      { isContact ? (
        <>
          <form
            style={{
              width: '700px',
              height: '700px',
              position: 'fixed',
              display: 'flex',
              flexDirection: 'column',
              top: '5%',
              right: '10%',
              margin: '0 auto',
              transition: 'all .5s ease-in-out',
            }}
            className="bg-indigo-500"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" ref={(input) => input && input.focus()} name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </>
      ) : ''}

    </>
  );
};

EmailForm.propTypes = {
  isContact: PropTypes.bool.isRequired,
};
export default EmailForm;
