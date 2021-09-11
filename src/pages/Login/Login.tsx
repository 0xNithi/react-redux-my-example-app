import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from 'state/user/hooks';
import Layout from 'components/Layout';
import { FormLogin } from './types';

const Login: React.FC = () => {
  const { push } = useHistory();
  const { user, handleLogin } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) push('/');
  }, [user, push]);

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    handleLogin(data);
  };

  return (
    <Layout title="Sign In | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 max-w-md bg-white rounded border border-gray-200 shadow dark:bg-gray-800"
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
