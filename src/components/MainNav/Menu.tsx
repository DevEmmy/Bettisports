'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import { RiMenu2Fill, RiSearch2Line, RiUser2Fill } from "react-icons/ri"
import LeftNav from './LeftNav'
import { getUser } from '@/hooks/UserRequests'

const Menu = () => {
    const [open, setOpen] = useState(false)
    const user = getUser()
  return (
    <div className='flex items-center gap-3'>
      <RiSearch2Line />

      {user ? (
        <Link
          href={'/profile'}
          className='px-5 bg-primary1 py-1 text-white flex items-center gap-3'>
          Profile
          <RiUser2Fill />
        </Link>
      ) : (
        <Link
          href={'/sign-in'}
          className='px-5 bg-primary1 py-1 text-white flex items-center gap-3'>
          Login
          <RiUser2Fill />
        </Link>
      )}

      <RiMenu2Fill onClick={() => setOpen(true)} className='cursor-pointer' />
      {/* </div> */}

      {open && <LeftNav setOpen={setOpen} />}
    </div>
  );
};

export default Menu;
