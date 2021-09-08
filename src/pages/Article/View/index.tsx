import React from 'react';
import Layout from 'components/Layout';
import { useParams } from 'react-router-dom';

const View: React.FC = () => {
  const { articleId }: { articleId: string } = useParams();
  return (
    <Layout title="Article | My Example App">
      <div className="flex flex-col items-center p-6 mx-auto space-y-8 bg-white rounded border border-gray-200 shadow dark:bg-gray-800">
        <div className="text-4xl font-medium text-black">{articleId}</div>
      </div>
    </Layout>
  );
};

export default View;
