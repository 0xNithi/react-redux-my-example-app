import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useArticle } from 'state/articles/hooks';
import Layout from 'components/Layout';
import { Article } from 'state/types';
import Skeleton from 'components/Skeleton';
import NotFound from 'pages/NotFound';
import { useUser } from 'state/user/hooks';

const View: React.FC = () => {
  const [article, setArticle] = useState<Article>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const { articleId }: { articleId: string } = useParams();
  const { push } = useHistory();
  const { handleView, handleDelete, isLoading, error } = useArticle();
  const { user } = useUser();

  useEffect(() => {
    if (isDeleted && !isLoading) push('/');
  }, [isLoading, isDeleted, push]);

  useEffect(() => {
    setArticle(handleView(articleId));
  }, [handleView, articleId]);

  return (
    <>
      <Layout title="Article | My Example App">
        {(isLoading || article) && (
          <div className="flex flex-col items-center p-6 mx-auto space-y-8 bg-white rounded border border-gray-200 shadow dark:bg-gray-800">
            <div className="text-4xl font-medium text-black">
              {article ? article.title : <Skeleton background="bg-black" width="w-64" height="h-8" />}
            </div>
            <div className="w-full text-gray-500 whitespace-pre-wrap">
              {article ? (
                article.body
              ) : (
                <div className="space-y-2">
                  <Skeleton width="w-80" height="h-4" />
                  <Skeleton width="w-64" height="h-4" />
                  <Skeleton width="w-72" height="h-4" />
                  <Skeleton width="w-32" height="h-4" />
                </div>
              )}
            </div>
            {article?.user === user?.id && (
              <div className="flex flex-row self-end space-x-2">
                <Link to={`/article/edit/${articleId}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setIsDeleted(true);
                    handleDelete({ articleId });
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </Layout>
      {error && <NotFound />}
    </>
  );
};

export default View;
