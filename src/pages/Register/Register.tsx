import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Layout from 'components/Layout';
import { IFormRegister } from 'types';

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IFormRegister> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <form
        className="flex flex-col items-center p-6 mx-auto space-y-4 max-w-md bg-white rounded shadow dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-medium text-black">Sign Up</div>
        <div className="w-full">
          <input type="text" className="input" placeholder="Username" {...register('username', { required: true })} />
          {errors?.username?.type === 'required' && (
            <div className="text-base font-medium text-pink-600">* This field is required</div>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors?.password?.type === 'required' && (
            <div className="text-base font-medium text-pink-600">* This field is required</div>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            className="input"
            placeholder="Confirm password"
            {...register('confirmPassword', { required: true })}
          />
          {errors?.confirmPassword?.type === 'required' && (
            <div className="text-base font-medium text-pink-600">* This field is required</div>
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
