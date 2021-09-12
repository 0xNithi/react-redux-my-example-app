import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="block p-4 space-y-2 bg-white rounded border border-gray-200 dark:bg-gray-800">
      <div className="p-4 w-full max-w-sm bg-black rounded animate-pulse" />
      <div className="p-2 w-full max-w-2xl bg-gray-500 rounded animate-pulse" />
      <div className="p-2 w-full max-w-xl bg-gray-500 rounded animate-pulse" />
      <div className="p-2 w-full max-w-3xl bg-gray-500 rounded animate-pulse" />
      <div className="p-2 w-full max-w-md bg-gray-500 rounded animate-pulse" />
    </div>
  );
};

export default SkeletonCard;
