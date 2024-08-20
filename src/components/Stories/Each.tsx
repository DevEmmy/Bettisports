import React from 'react'

const Each = ({item}: any) => {
    return (
        <div className='h-[400px] relative'>
            <img src={item?.media} alt="" className='w-full h-full object-cover' />

            <div className="overlay" />

            <div className="details p-3">
                <p className='text-[10px]'>{item?.date}</p>
                <p className='font-[600]'>
                    {item?.title} 
                </p>
            </div>

        </div>
    )
}

export default Each