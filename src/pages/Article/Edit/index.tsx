import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useArticle } from 'state/articles/hooks';
import { Article } from 'state/types';
import Layout from 'components/Layout';

const Edit: React.FC = () => {
  const [article, setArticle] = useState<Article>();
  const { articleId }: { articleId: string } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { isLoading, handleView, handleEdit } = useArticle();

  const onSubmit = (data: { articleId: string; title: string; body: string }): void => {
    handleEdit({ ...data, articleId });
  };

  useEffect(() => {
    setArticle(handleView(articleId));
  }, [articleId, handleView]);

  useEffect(() => {
    setValue('title', article?.title);
    setValue('body', article?.body);
  }, [article, setValue]);

  return (
    <Layout title="New Article | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 bg-white rounded border border-gray-200 shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">Edit Article</div>
        <div className="w-full">
          <input
            type="text"
            className="input"
            placeholder="Article Title"
            {...register('title', { required: { value: true, message: 'Article Title is required' } })}
            disabled={isLoading}
          />
          {errors?.title && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.title.message}</div>
          )}
        </div>
        <div className="w-full">
          <textarea
            className="input"
            rows={10}
            placeholder="Article Body"
            {...register('body', { required: { value: true, message: 'Article Body is required' } })}
            disabled={isLoading}
          />
          {errors?.body && <div className="absolute text-base font-medium text-pink-600">* {errors.body.message}</div>}
        </div>
        <button type="submit" className="self-end btn btn-primary" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Edit;
