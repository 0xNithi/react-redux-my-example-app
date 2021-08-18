import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="p-2 mx-auto mt-20 w-full max-w-6xl">{children}</div>
    </>
  );
};

export default Layout;
