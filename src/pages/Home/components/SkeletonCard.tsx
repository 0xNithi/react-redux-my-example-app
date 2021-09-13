import React from 'react';
import Skeleton from 'components/Skeleton';

const SkeletonCard: React.FC = () => (
  <div className="block p-4 space-y-2 bg-white rounded border border-gray-200 dark:bg-gray-800">
    <Skeleton background="bg-black" width="w-48" height="h-6" />
    <Skeleton width="w-80" height="h-4" />
    <Skeleton width="w-64" height="h-4" />
    <Skeleton width="w-72" height="h-4" />
    <Skeleton width="w-32" height="h-4" />
  </div>
);

export default SkeletonCard;
