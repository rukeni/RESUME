import React from 'react';
import ReactMarkDown from 'react-markdown';

const index = () => {
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;
  return (
    <div className="flex-1">
      <ReactMarkDown source={markdown} />
    </div>
  );
};

export default index;
