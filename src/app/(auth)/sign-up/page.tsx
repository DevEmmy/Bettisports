"use client";
import GrayLine from '@/components/UI/GrayLine'
import { signUp } from '@/requests';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { RiEyeLine, RiFacebookCircleFill, RiGoogleFill } from 'react-icons/ri'

const Page: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setLoading(true);
        let feedback = await signUp({email, password, firstName, lastName});
        if(feedback){
            router.push("/")
        }
        setLoading(false);
    }

    return (
        <div className='flex-all-center mt-10 w-2/3 flex-col text-start m-auto gap-5'>
            <div className='w-full'>
                <p className='text-[40px] font-[600] w-full'>Sign Up</p>
                <p className='font-[500] w-full'>Welcome to Bettisport.</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl'
                    placeholder='Email'
                />
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl'
                    placeholder='First Name'
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl'
                    placeholder='Last Name'
                />
                <div className='flex-center gap-2 w-full p-4 bg-gray-50 focus:outline-secondaryBlue focus:bg-white rounded-xl'>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className='focus:outline-none w-full bg-transparent'
                        placeholder='Password'
                    />
                    <RiEyeLine className='cursor-pointer' />
                </div>
                <button type='submit' className={`bg-secondaryBlue text-white p-4 rounded-xl ${loading && "opacity-40"}`}>{loading ? "Signing Up" : "Sign Up"}</button>
            </form>

            <p className='text-center  font-[500]'>
                I have an account <Link href="/sign-in" className='text-secondaryBlue'>Login</Link>
            </p>

            <div className='flex-center justify-center gap-2'>
                <GrayLine />
                <p className='text-gray-600'>OR</p>
                <GrayLine />
            </div>

            <div className="grid grid-cols-2 gap-5">
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
    )
}

export default Page
