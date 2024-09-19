'use client';
import GrayLine from '@/components/UI/GrayLine';
import { login } from '@/requests';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  RiEyeCloseLine,
  RiEyeLine,
  RiEyeOffLine,
  RiFacebookCircleFill,
  RiGoogleFill,
} from 'react-icons/ri';

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    let feedback = await login({ email, password });
    if (feedback) {
      router.push('/');
    }
    setLoading(false);
  };

  return (
    <div className='flex-all-center flex-col text-start w-4/5 md:w-2/3 m-auto gap-5 h-[100vh]'>
      <div className='w-full flex flex-col gap-3 leading-10'>
        <p className='text-[40px] font-[600]'>Log in</p>
        <p className='font-[500]'>Welcome back!</p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
        <input
          type='text'
          value={email}
          onChange={handleEmailChange}
          className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl'
          placeholder='Email'
        />
        <div className='flex-center gap-2 w-full p-4 bg-gray-50 focus:outline-secondaryBlue focus:bg-white rounded-xl'>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className='focus:outline-none w-full bg-transparent focus:bg-transparent'
            placeholder='Password'
          />

          {showPassword ? (
            <RiEyeOffLine
            className='cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          />
          ) : (

            <RiEyeLine
              className='cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <button
          type='submit'
          className={`bg-secondaryBlue text-white p-4 rounded-xl ${
            loading && 'opacity-40'
          }`}>
          {loading ? 'Logging in' : 'Login'}
        </button>
      </form>

      <Link
        href='/reset-password'
        className='text-secondaryBlue text-center  font-[500]'>
        Forgot your Password?
      </Link>
      <p className='text-center  font-[500]'>
        I don&apos;t have an account{' '}
        <Link href='/sign-up' className='text-secondaryBlue'>
          Sign Up
        </Link>
      </p>

      <div className='flex-center justify-center gap-2'>
        <GrayLine />
        <p className='text-gray-600'>OR</p>
        <GrayLine />
      </div>

      <div className='grid grid-cols-2 gap-5'>
        <div className='flex-all-center rounded-2xl p-4 border gap-2 cursor-pointer'>
          <RiFacebookCircleFill className='text-blue-500' size={30} />
          <p>Facebook</p>
        </div>

        <div className='flex-all-center rounded-2xl p-4 border gap-2 cursor-pointer'>
          <RiGoogleFill className='' size={30} />
          <p>Google</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
