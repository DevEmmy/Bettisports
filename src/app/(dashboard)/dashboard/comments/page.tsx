import Table from '@/components/Comments/Table'
import React from 'react'
import { HiSearch, HiTrash } from 'react-icons/hi'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 flex-center'>
                <p className=' font-[600] '>Comments</p>
            </div>

            <div className="flex-center justify-between">
                <div className='categories'>
                    <p>All <span>(108)</span></p>
                    <p>Mine <span>(14)</span></p>
                    <p>Approved <span>(109)</span></p>
                    <p>Spam <span>(109)</span></p>
                    <p>Trash <span>(109)</span></p>
                </div>

                <div className='bg-white border flex'>
                    <input type="text" className='bg-transparent focus:outline-none p-3 ' placeholder='Search Comments'/>
                    <div className='bg-primary1 p-3 text-white'>
                        <HiSearch size={24}/>
                    </div>
                </div>
            </div>

            <div className='post-select gap-4 flex'>
                <select name="" id="">
                    <option value="">Bulk Action</option>
                </select>

                <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4'>
                    Apply
                </button>
            </div>

            <Table />
        </div>
    )
}

export default page