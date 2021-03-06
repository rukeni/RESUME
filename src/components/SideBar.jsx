/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../context/globalContext';

const SideBar = () => (
  <Data.Consumer>
    { ({ pathname, handleClick }) => (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="relative left-0 top-0 flex flex-col justify-center items-center w-full">
          <div className="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center absolute bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600 flex-5">
            <div className="md:relative mx-auto lg:float-right lg:px-6">
              <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                <li
                  data-type="navigate"
                  data-href="/"
                  onClick={handleClick}
                  className={`mr-3 flex-1 ${pathname === '/' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-600'}`}
                >
                  <NavLink to="/" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
                    <i className="fas fa-link pr-0 md:pr-3 text-pink-500" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base md:font-bold block md:inline-block">대시보드</span>
                  </NavLink>
                </li>
                <li
                  data-type="navigate"
                  data-href="/portfolio"
                  onClick={handleClick}
                  className={`mr-3 flex-1 ${pathname === '/portfolio' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-600'}`}
                >
                  <NavLink to="/portfolio" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
                    <i className="fas fa-link pr-0 md:pr-3 text-pink-500" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base md:font-bold block md:inline-block">포트폴리오</span>
                  </NavLink>
                </li>
                <li
                  data-type="navigate"
                  data-href="/resume"
                  onClick={handleClick}
                  className={`mr-3 flex-1 ${pathname === '/resume' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-600'}`}
                >
                  <NavLink to="/resume" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
                    <i className="fas fa-link pr-0 md:pr-3 text-pink-500" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base md:font-bold block md:inline-block">자기소개서</span>
                  </NavLink>
                </li>
                <li
                  data-type="navigate"
                  data-href="/character"
                  onClick={handleClick}
                  className={`mr-3 flex-1 ${pathname === '/character' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-600'}`}
                >
                  <NavLink to="/character" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
                    <i className="fas fa-link pr-0 md:pr-3 text-pink-500" />
                    <span className="pb-1 md:pb-0 text-xs md:text-base md:font-bold block md:inline-block">개인성향</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}

  </Data.Consumer>
);

export default SideBar;
