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
            name: "password",
            title: "Password",
            type: "password",
            required: true
        },
    ]
    return (
        <div className='flex flex-col gap-5 w-1/2'>
            <p className='text-[30px] font-[600]'>Add New User</p>
            <p className='text-sm text-gray-500'>Create a brand new user and add them to this site.</p>

            <div className='flex flex-col gap-3 add'>
                {
                    fields?.map((field, i) => {
                        return (
                            <div className=''>
                                <p>{field.title}</p>
                                <input type={field.type || "text"} className='p-3 border' />
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
                    </select>
                </div>

                <div>
                    <p>Designation</p>

                    <input type="text" className='p-3 border' />
                </div>

                <button className=' bg-secondaryBlue text-white w-fit px-10 p-2 text-sm'>
                    Add
                </button>

            </div>
        </div>
    )
}

export default page