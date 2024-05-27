"use client";
import { toastError } from '@/utils/toast';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AuthProvider = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  let route: any = window.location.pathname;

  let func = async () => {
    let token = localStorage.getItem('token');
    console.log(route);

    if (route === '/sign-in') {
      setShow(true);
    } else if (!token && route !== '/') {
      toastError('You\'re not Authorized');
      router.push('/sign-in');
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    func();
  }, [route]); // Re-run func on route changes

  return (
    <>
      {children}
    </>
  );
};

export default AuthProvider;
