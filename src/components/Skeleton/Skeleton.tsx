import React from 'react';
import classNames from 'utils/classNames';

interface Props {
  width?: string;
  height?: string;
}

const Skeleton: React.FC<Props> = ({ width = 'w-full', height = 'h-full', children }) => {
  return <div className={classNames('animate-pulse bg-gray-200 rounded', width, height)}>{children}</div>;
};

export default Skeleton;
