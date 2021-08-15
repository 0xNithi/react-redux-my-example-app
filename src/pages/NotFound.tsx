import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-full">
      <div className="text-center">
        <div className="text-6xl font-semibold text-indigo-900">404</div>
        <div className="text-lg font-medium text-indigo-900">Page not found</div>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
