import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useUser } from 'state/user/hooks';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const { user } = useUser();
  return <>{user ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default ProtectedRoute;
