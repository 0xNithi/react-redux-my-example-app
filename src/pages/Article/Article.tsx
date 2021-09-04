import React from 'react';
import Layout from 'components/Layout';
import { Route } from 'react-router-dom';

const Article: React.FC = () => {
  return (
    <Layout title="Article | My Example App">
      <Route path="/article/new">New</Route>
      <Route path="/article/edit/:articleId">Editor</Route>
    </Layout>
  );
};

export default Article;
