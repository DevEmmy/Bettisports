'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import { HiCog, HiX } from 'react-icons/hi';
import FileBase64 from 'react-file-base64';

interface Props {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    likes: string[];
    saved: string[];
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}

const EditUsers = ({ user }: Props) => {
  const [showEdit, setShow] = useState(false);
  // const [username,setUsername] = useState<string>(user?.username);
  const [email, setEmail] = useState<string>(user?.email);
  const [firstName, setFirstName] = useState<string>(user?.firstName);
  const [lastName, setLastName] = useState<string>(user?.lastName);
  const [role, setRole] = useState<string>(user?.role);
  const [password, setPassword] = useState<string>(user?.password);
  const [profilePicture, setProfilePicture] = useState<string>(
    user?.profilePicture
  );
  const [changeMedia, setChangeMedia] = useState<boolean>(false);
  const handleDelete = async () => {};
  return (
    <div>
      <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span
          className='text-red-700 border-x-2 px-2 cursor-pointer'
          onClick={handleDelete}>
          Trash
        </span>
        <Link href={``} className='text-blue-600 cursor-pointer'>
          View
        </Link>
      </div>

      {showEdit && (
        <div className='grid place-items-center justify-between'>
          <div className='black__overlay' onClick={() => setShow(false)} />

          <div className='fixed z-[1000] md:w-2/3  left-0 right-0 top-0 bottom-0 grid grid-cols-[1fr_4fr] m-auto h-fit mx6 bg-white p-10 setings md:gap-5'>
            <div className='flex flex-col gap-5 place-items-center'>
            <p className='text-[20px]'>Edit User details</p>
              <img
                src={profilePicture}
                alt=''
                className='size-[60px] md:size-[120px] rounded-full mx-auto'
              />
              <p className='text-sm text-red-500 mx-auto cursor-pointer' onClick={() => setProfilePicture('')}>Remove Picture</p>
              <button className='border border-secondaryBlue text-secondaryBlue flex flex-col gap-2 px-5 items-center p-2 w-fit '>
                <div className={`flex gap-2 items-center ${changeMedia && 'hidden'}`} onClick={() => setChangeMedia(true)}>
                  <HiCog />Change Media
                </div>
                <div className={` ${changeMedia ? 'grid' : 'hidden'}`}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64: any) => setProfilePicture(base64.base64)}/>
                </div>
              </button>
              <button
              onClick={() => setShow(false)}
              className='top-0 absolute right-0 text-gray-500 p-3'>
              <HiX className='cursor-pointer' size={20} />
            </button>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Firstname</label>
                <input
                  type='text'
                  placeholder='Question'
                  className='p-3 border bg-white focus:outline-none'
                  value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Lastname</label>
                <input
                  type='text'
                  placeholder='Question'
                  className='p-3 border bg-white focus:outline-none'
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Email</label>
                <input
                  type='text'
                  placeholder='Question'
                  className='p-3 border bg-white focus:outline-none'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Role</label>
                <select name="" id="" className='p-3 border' onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value) }>
                        <option value="role">Role</option>
                        {["ADMINISTRATOR","AUTHOR"].map((item: any, i: number) => (
                            <option value={item} key={i}  selected={item == role ? true : false}>
                              {item}
                            </option>
                          )
                        )
                      }
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <button className='border bg-secondaryBlue text-white flex gap-2 px-5 items-center p-2 w-fit '>
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUsers;
