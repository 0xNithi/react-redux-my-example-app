import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from 'state/user/hooks';
import Layout from 'components/Layout';
import { FormRegister } from './types';

const Register: React.FC = () => {
  const { push } = useHistory();
  const { user, initialize, handleRegister } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (user) push('/');
  }, [user, push]);

  const onSubmit: SubmitHandler<FormRegister> = (data) => {
    handleRegister(data);
  };

  return (
    <Layout title="Sign Up | My Example App">
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-8 max-w-md bg-white rounded border border-gray-200 shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">Sign Up</div>
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
        <div className="w-full">
          <input
            type="password"
            className="input"
            placeholder="Confirm password"
            {...register('confirmPassword', {
              validate: (value) => value === watch('password') || 'The passwords do not match',
              required: { value: true, message: 'Confirm password is required' },
            })}
          />
          {errors?.confirmPassword && (
            <div className="absolute text-base font-medium text-pink-600">* {errors.confirmPassword.message}</div>
          )}
        </div>
        <button type="submit" className="self-end btn btn-primary">
          Sign up
        </button>
      </form>
    </Layout>
  );
};

export default Register;
