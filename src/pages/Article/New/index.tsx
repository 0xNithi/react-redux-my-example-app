import React from 'react';
import { useForm } from 'react-hook-form';
import { useArticle } from 'state/articles/hooks';
import Layout from 'components/Layout';

const New: React.FC = () => {
  const { isLoading, handleCreate } = useArticle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { title: string; body: string }): void => {
    handleCreate(data);
  };

  return (
    <Layout title="New Article | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 bg-white rounded border border-gray-200 shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">New Article</div>
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
          Publish
        </button>
      </form>
    </Layout>
  );
};

export default New;
