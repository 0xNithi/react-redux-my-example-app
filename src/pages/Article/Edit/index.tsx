import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';

const Edit: React.FC = () => {
  const { articleId }: { articleId: string } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  console.log(articleId);

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
          />
          {errors?.body && <div className="absolute text-base font-medium text-pink-600">* {errors.body.message}</div>}
        </div>
        <button type="submit" className="self-end btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Edit;
