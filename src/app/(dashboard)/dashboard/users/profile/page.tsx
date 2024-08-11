import Image from 'next/image'
import React from 'react'

const page = () => {

    const fields = [
        {
            name: "username",
            required: true,
            title: "Username"
        },
        {
            name: "email",
            required: true,
            title: "Email"
        },
        {
            name: "firstName",
            title: "First Name"
        },
        {
            name: "lastName",
            title: "Last Name"
        },
        {
            name: "nickName",
            title: "Nick Name",
            required: true
        },
        {
            title: "Display name publicly as",
            name: "displayPublicName"
        },
        {
            name: "xUsername",
            title: "X username (without @)"
        },
        {
            name: "facebookUrl",
            title: "Facebook profile URL"
        },
        {
            name: "additionalProfileUrls",
            title: "Additional Profile URLs"
        }
    ]

    return (
        <div className='flex flex-col gap-5 w-1/2'>
            <p className='text-[30px] font-[600]'>Profile</p>

            <div className='flex flex-col gap-3 add'>
                {
                    fields?.map((field, i ) => {
                        return (
                            <div className='' key={i}>
                                <p>{field.title}</p>
                                <input type={"text"} className='p-3 border' />
                            </div>
                        )
                    })
                }

                <p className='text-[24px] font-[500]'>About Yourself</p>

                <div>
                    <p>
                        Biographical Info
                    </p>

                    <div>
                        <textarea name="" id="" className='h-[100px] resize-none p-3 border w-full' />
                        <p className='text-sm text-gray-700 '>Share a little biographical information to fill out your profile. This may be shown publicly.</p>
                    </div>
                </div>

                <p className='text-[24px] font-[500]'>Account Management</p>

                <div>
                    <p>Biographical Info</p>

                    <button className='border text-secondaryBlue border-secondaryBlue py-2 px-5 w-fit'>
                        Set New Password
                    </button>
                </div>

                <div>
                    <p>Sessions</p>

                    <div>
                        <button className='border text-secondaryBlue border-secondaryBlue py-2 px-5'>
                            Log Out Everywhere Else
                        </button>
                        <p className='text-sm text-gray-700'>Did you lose your phone or leave your account logged in at a public computer? You can log out everywhere else, and stay logged in here.</p>
                    </div>
                </div>

                <div className=''>
                    <p>Designation</p>
                    <input type={"text"} className='p-3 border' placeholder='Developer' />
                </div>

                <div>
                    <p>Profile Picture</p>

                    <div className='flex flex-col gap-2'>
                        <Image width={0} height={0} unoptimized src="/./img.jpg" alt="" className='size-[100px]' />
                        

                        <div className="flex gap-5">
                            <button className='border border-secondaryBlue text-secondaryBlue py-2 px-5'>
                                Select
                            </button>

                            <button className=' bg-red-600 text-white py-2 px-5'>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                <button className=' bg-secondaryBlue text-white w-fit px-10 p-3 text-sm'>
                    Update Profile
                </button>
            </div>
        </div>
    )
}

export default page