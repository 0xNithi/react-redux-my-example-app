import React from 'react';
import Layout from 'components/Layout';

const Article: React.FC = () => {
  return (
    <Layout title="Article | My Example App">
      <div className="text-black dark:text-white">Article</div>
    </Layout>
  );
};

export default Article;
