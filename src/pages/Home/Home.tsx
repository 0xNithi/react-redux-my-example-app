import React from 'react';
import Layout from 'components/Layout';
import { useFetchArticles } from 'state/articles/hooks';
import ArticleCard from './components/ArticleCard';
import SkeletonCard from './components/SkeletonCard';

const Home: React.FC = () => {
  const { articles, isLoading } = useFetchArticles();

  return (
    <Layout title="Home | My Example App" className="space-y-4">
      {!isLoading && articles.map((article) => <ArticleCard article={article} key={article.id} />)}
      {isLoading && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </Layout>
  );
};

export default Home;
