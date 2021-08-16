import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import config from './config';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed top-0 right-0 left-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800">
      <div className="flex flex-row justify-between items-center p-2 mx-auto max-w-6xl h-14">
        <div className="text-xl font-semibold text-pink-600">Example</div>
        <div className="flex flex-row items-center">
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:space-x-4">
            {config.map((link) => (
              <NavLink
                exact
                to={link.to}
                className="font-medium text-black"
                activeClassName="text-pink-500"
                key={link.title}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <ThemeSwitcher />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-1.5 text-pink-500 rounded border border-pink-400 sm:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col sm:hidden ${
          open ? 'max-h-32 p-2' : 'max-h-0 invisible'
        } transition-all overflow-hidden`}
      >
        {config.map((link) => (
          <NavLink
            exact
            to={link.to}
            className="w-full font-medium text-black"
            activeClassName="text-pink-500"
            key={link.title}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
