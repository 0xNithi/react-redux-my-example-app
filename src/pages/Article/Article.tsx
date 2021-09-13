import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';

const New = React.lazy(() => import('./New'));
const View = React.lazy(() => import('./View'));
const Edit = React.lazy(() => import('./Edit'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const Article: React.FC = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/article/new" component={New} />
      <ProtectedRoute path="/article/edit/:articleId" component={Edit} />
      <Route path="/article/:articleId" component={View} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Article;
