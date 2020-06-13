import React from 'react';

import Data from '../../context/globalContext';

const LoginCard = () => (
  <Data.Consumer>
    { ({ login, handleChange, handleSubmit }) => (
      <>
        <form
          className="flex-1 flex  w-full  flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="login-id"
              >
                이름
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="login-id"
                type="text"
                value={login.id}
                onChange={handleChange}
                style={{
                  transition: 'all .5s ease',
                }}
                placeholder="원하는 이름"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="login-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="login-password"
                type="password"
                placeholder="비밀번호 입력"
                style={{
                  transition: 'all .5s ease',
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow bg-indigo-500 hover:bg-purple-400 w-20 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                style={{
                  transition: 'all .5s ease',
                }}
                onClick={handleSubmit}
              >
                등록
              </button>
            </div>
          </div>
        </form>
      </>
    )}

  </Data.Consumer>
);

export default LoginCard;
