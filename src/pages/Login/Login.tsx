import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'state';
import { fetchLogin } from 'state/user';
import Layout from 'components/Layout';
import { FormLogin } from './types';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    dispatch(fetchLogin(data));
  };

  return (
    <Layout title="Sign In | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 max-w-md bg-white rounded shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">Sign In</div>
        <div className="w-full">
          <input
            type="text"
            className="input"
            placeholder="Username"
            {...register('username', { required: { value: true, message: 'Username is required' } })}
          />
          {errors?.username && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.username.message}</div>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
            })}
          />
          {errors?.password && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.password.message}</div>
          )}
        </div>
        <button type="submit" className="self-end btn btn-primary">
          Sign in
        </button>
      </form>
    </Layout>
  );
};

export default Login;
