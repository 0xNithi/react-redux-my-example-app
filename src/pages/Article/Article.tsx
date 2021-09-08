import React from 'react';
import { Switch, Route } from 'react-router-dom';

const New = React.lazy(() => import('./New'));
const View = React.lazy(() => import('./View'));
const Edit = React.lazy(() => import('./Edit'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const Article: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/article/new" component={New} />
      <Route path="/article/:articleId" component={View} />
      <Route path="/article/edit/:articleId" component={Edit} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Article;
