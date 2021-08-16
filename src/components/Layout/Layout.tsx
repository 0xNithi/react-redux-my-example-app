import React from 'react';

const Layout: React.FC = ({ children }) => {
  return <div className="p-2 mx-auto mt-14 w-full max-w-6xl">{children}</div>;
};

export default Layout;
