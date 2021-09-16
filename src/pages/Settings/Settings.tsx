import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from 'state/user/hooks';
import Layout from 'components/Layout';
import { FormSettings } from './types';

const Settings: React.FC = () => {
  const { error, handleUpdate } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormSettings> = (data) => {
    handleUpdate(Object.fromEntries(Object.entries(data).filter(([, value]) => value !== '')));
  };

  return (
    <Layout title="Sign Up | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 max-w-md bg-white rounded border border-gray-200 shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">Settings</div>
        {error && <div className="text-base font-medium text-pink-600">{error}</div>}
        <div className="w-full">
          <input type="text" className="input" placeholder="Username" {...register('username')} />
          {errors?.username && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.username.message}</div>
          )}
        </div>
        <div className="w-full">
          <input type="password" className="input" placeholder="New Password" {...register('password')} />
          {errors?.password && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.password.message}</div>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input"
            placeholder="Confirm password"
            {...register('confirmPassword', {
              validate: (value) => value === watch('password') || 'The passwords do not match',
            })}
          />
          {errors?.confirmPassword && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.confirmPassword.message}</div>
          )}
        </div>
        <button type="submit" className="self-end btn btn-primary">
          Update Settings
        </button>
      </form>
    </Layout>
  );
};

export default Settings;
