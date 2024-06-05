'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginAction } from './server-actions/loginAction';
import Link from 'next/link';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const [errorMessage, seterrorMessage] = useState(null)
  const onSubmit = async (data) => {
    console.log(data);
    const response = await LoginAction(data)
    console.log("response", response)
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className={`mt-2 p-2 w-full border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`mt-2 p-2 w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <div>Dont Have a Account ? <Link href={"/admin-auth/signup"} className='text-blue-700'>Register</Link></div>
        </form>
        
      </div>
    </div>
  );
};

export default LoginForm;
