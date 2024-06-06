import React from 'react'

const Profile = () => {
    return (
        <div className='grid grid-cols-5 gap-10 mx-xPadding my-10'>
            <div className='grid grid-cols-5 col-span-5'>
                <div />
                <p className='col-span-4 font-[600]'>Profile</p>
            </div>
            <img src="./ads2.png" alt="" />

            <div className='grid col-span-3 grid-cols-[1fr_3fr]'>

                <div className='col-span-3 grid-cols-[1fr_3fr] grid'>
                    <div className='flex flex-col gap-5'>
                        <img src="./img.jpg" alt="" className='size-[120px] rounded-full' />
                        <p className='text-sm text-red-500 '>Remove Picture</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className=' font-[600]'>Account Data</p>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Name</p>
                            <input type="text" value={"Samuel"} className='border p-3 rounded-lg text-sm' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Email</p>
                            <p className='bg-gray-100 text-black p-3 rounded-lg text-sm'>Alexdams@gmail.com</p>
                        </div>
                    </div>
                </div>


                <div />
                <p className='text-sm text-red-500 underline'>Close my account</p>


            </div>

            <img src="./ads2.png" alt="" />
        </div>
    )
}

export default Profile