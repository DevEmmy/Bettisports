"use client"
import Line from '@/components/UI/Line';
import { getUser } from '@/hooks/UserRequests'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useUpdateProfile } from '@/hooks/UserRequests';
import { validatePasswordReset } from '@/utils/validator';
import { toastSuccess } from '@/utils/toast';
import FileBase64 from 'react-file-base64';

const Profile = () => {

    const user = getUser();

    const [email, setEmail] = useState<string>(user?.email);
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState<string>(user?.lastName);
    const [profilePicture, setProfilePicture] = useState<string>(user?.profilePicture);
    const [showPicChange, setShowPicChange] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            setFirstName(user?.firstName);
            setLastName(user?.lastName);
            setProfilePicture(user?.profilePicture);
            setEmail(user?.email);
        }
    }, [user])

    console.log(user)

    const { updateProfileFn, isLoading, isError, error, isSuccess } = useUpdateProfile();

    const handleSubmit = async (e: any) => {
        const profileProp = {
            email,
            firstName,
            lastName,
            profilePicture
        }
        validatePasswordReset(email);
        e.preventDefault();
    
        try {
          updateProfileFn(profileProp);
          user.email = email;
          user.firstName = firstName;
          user.lastName = lastName;
          user.profilePicture = profilePicture;
          localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
          console.error('Error:', error);
        }
    
      }

      useEffect(() => {
        if (isSuccess) {
            toastSuccess('Updated successfully');
        }
      }, [isSuccess])

    if(!user){
        return null
    }
    
    return (
        <div className='md:grid grid-cols-5 gap-10 px-5 md:px-xPadding my-10 justify-center'>
            <div className='flex items-center gap-2 md:grid grid-cols-5 col-span-5 justify-center'>
                <div className='hidden md:flex' />
                <p className='col-span-4 font-[600] text-base'>Profile</p>
                <div className='grow md:hidden'>
                    <Line/>
                </div>
            </div>
            
            {/* Ads will be here */}
            <img src="./ads2.png" alt="" className='h-[90px] md:h-min w-full my-6 md:my-0 md:w-min' />

            <div className='grid col-span-3 grid-cols-[1fr_3fr] my-2 md:my-0'>

                <div className='col-span-3 grid-cols-[1fr_3fr] grid my-2 md:my-0'>
                    <div className='flex flex-col gap-5'>
                        <img src={profilePicture} alt="" className='size-[60px] md:size-[120px] rounded-full' />
                        <p className={`text-sm text-red-500 ${showPicChange && 'hidden'}`} onClick={() => setShowPicChange(true)}>Remove Picture</p>
                        {
                            showPicChange && (
                                <FileBase64
                                    multiple={false}
                                    onDone={(base64: any) => { setProfilePicture(base64.base64); 
                                        // setMediaType(base64.type?.split('/')[0])
                                    }}
                                />
                            )
                        }
                    </div>


                    <div className='flex flex-col gap-5'>
                        <p className=' font-[600]'>Account Data</p>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>First Name</p>
                            <input type='text'
                             value={firstName} className='border p-3 rounded-lg text-sm'
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setFirstName(e.target.value)
                                }

                                contentEditable={true}
                            />  
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Last Name</p>
                            <input type='text' value={lastName} className='border p-3 rounded-lg text-sm' contentEditable
                                onChange={(e) =>
                                    setLastName(e.target.value)
                                }
                             />  
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Email</p>
                            <input type='email' className='bg-gray-100 text-black p-3 rounded-lg text-sm'
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e?.target.value)}
                             />
                        </div>

                    </div>
                </div>


                <div />
                <div className='flex gap-3 items-center py-3'>
                    <button
                        className={`border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit opacity-70'}`}
                        onClick={handleSubmit}
                    >
                        {isLoading ? 'Submitting...' : 'submit'}
                    </button>


                    <p className='text-sm text-red-500 underline'>Close my account</p>
                </div>


            </div>



            <img src="./ads2.png" alt="" className='h-[90px] md:h-min w-full my-6 md:my-0 md:w-min' />
        </div>
    )
    
}

export default Profile