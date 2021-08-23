import React from 'react';
import { Helmet } from 'react-helmet-async';
import classNames from 'utils/classNames';

interface Props {
  title: string;
  className?: string;
}

const Layout: React.FC<Props> = ({ title, className, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={classNames('p-2 mx-auto mt-20 w-full max-w-6xl', className)}>{children}</div>
    </>
  );
};

export default Layout;
