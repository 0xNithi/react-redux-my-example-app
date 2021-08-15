import React from 'react';
import { NavLink } from 'react-router-dom';
import config from './config';

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800">
      <div className="flex flex-row justify-between items-center mx-auto max-w-6xl h-12">
        <div className="text-xl font-semibold text-pink-600">Example</div>
        <div className="flex flex-row space-x-4">
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
      </div>
    </div>
  );
};

export default Navbar;
