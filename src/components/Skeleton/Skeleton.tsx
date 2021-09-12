import React from 'react';
import classNames from 'utils/classNames';

interface Props {
  background?: string;
  width?: string;
  height?: string;
}

const Skeleton: React.FC<Props> = ({ background = 'bg-gray-500', width = '', height = '', children }) => {
  return <div className={classNames('animate-pulse rounded w-full h-full', background, width, height)}>{children}</div>;
};

export default Skeleton;
