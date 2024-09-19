'use client';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useCreateUser } from '@/hooks/UserRequests';
import { toastError, toastSuccess } from '@/utils/toast';

const page = () => {

    const [username,setUsername] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [firstName,setFirstName] = useState<string>('');
    const [lastName,setLastName] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const { createUserFn, isLoading, isError, error, isSuccess} = useCreateUser();

    const handleSubmit = async () => {
        if (!email || !username || !password) {
            toastError('Email, Username or Password is empty!');
            return 0;
        }
        const userData = {
            firstName,
            lastName,
            email,
            password
        };

        try {
            createUserFn(userData)
            console.log('Success:', userData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if(isSuccess) {
            toastSuccess('User Added successfully');
            setEmail(''); setUsername(''); setPassword(''); setFirstName(''); setLastName('');
        }
    },[isSuccess]);

    const fields = [
        {
            name: "username",
            required: true,
            title: "Username",
            value: username,
            onchange: (e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value)
            }
        },
        {
            name: "email",
            required: true,
            title: "Email",
            value: email,
            onchange: (e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
            }
        },
        {
            name: "firstName",
            title: "First Name",
            value: firstName,
            onchange: (e: ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value)
            }
        },
        {
            name: "lastName",
            title: "Last Name",
            value: lastName,
            onchange: (e: ChangeEvent<HTMLInputElement>) => {
                setLastName(e.target.value)
            }
        },
        {
            name: "password",
            title: "Password",
            type: "password",
            required: true,
            value: password,
            onchange: (e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }
        },
    ]
    return (
        <div className='flex flex-col gap-5 md:w-1/2'>
            <p className='text-[30px] font-[600]'>Add New User</p>
            <p className='text-sm text-gray-500'>Create a brand new user and add them to this site.</p>

            <div className='flex flex-col gap-3 add'>
                {
                    fields?.map((field, i) => {
                        return (
                            <div className='' key={i}>
                                <p>{field.title}</p>
                                <input type={field.type || "text"} className='p-3 border' value={field.value} onChange={field.onchange} required={field.required ? field.required : false}/>
                            </div>
                        )
                    })
                }

                <div>
                    <p>
                        Send User Notification
                    </p>

                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" />
                        <p className='text-gray-500'>Send the new user an email about their account</p>
                    </div>
                </div>

                <div>
                    <p>Role</p>

                    <select name="" id="" className='p-3 border'>
                        <option value="role">Role</option>
                        <option value="ADMINISTRATOR">Administrator</option>
                        <option value="AUTHOR">Author</option>
                    </select>
                </div>

                <div>
                    <p>Designation</p>

                    <input type="text" className='p-3 border' />
                </div>

                <button className=' bg-secondaryBlue text-white w-fit px-10 p-2 text-sm' onClick={handleSubmit}>
                    {isLoading? 'Adding new user...' : 'Add'}
                </button>

            </div>
        </div>
    )
}

export default page