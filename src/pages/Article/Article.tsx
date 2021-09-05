import React from 'react';
import { Route } from 'react-router-dom';
import New from './New';
import Edit from './Edit';

const Article: React.FC = () => {
  return (
    <>
      <Route exact path="/article/new" component={New} />
      <Route path="/article/edit/:articleId" component={Edit} />
    </>
  );
};

export default Article;
