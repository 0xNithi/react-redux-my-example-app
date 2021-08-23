import React from 'react';
import Layout from 'components/Layout';
import { useArticles, useFetchArticles } from 'state/articles/hooks';
import ArticleCard from './components/ArticleCard';

const Home: React.FC = () => {
  useFetchArticles();
  const { articles } = useArticles();
  console.log(articles);
  return (
    <Layout title="Home | My Example App" className="space-y-4">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </Layout>
  );
};

export default Home;
