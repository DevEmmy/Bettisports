import React from 'react'
import Line from '../UI/Line'

const Topics = () => {
    return (
        <div className='mx-xPadding my-20'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-[600]'>Browse Over 200 Topics</h1>
                <Line />
            </div>

            <div className='bg-primary1 grid grid-cols-7 my-5 px-[5%] py-20 gap-5'>
                {
                [1,2,3,4,5,6,7, 1,2,3,4,5,6,7].map((n: any, i: number)=>{
                    return(
                        <div className='text-white' key={i}>
                            <p className='text-[20px] font-[600]'>Articles</p>
                            <div className='text-sm my-1'>
                                <p>Science</p>
                                <p>Technology</p>
                                <p>Art</p>
                            </div>

                            <button className='bg-transparent border border-defaultYellow rounded-full px-3 py-1 text-[12px]'>
                                view all Articles
                            </button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Topics