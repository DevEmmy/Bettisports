import React from 'react'
import Line from '../UI/Line'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'

const MostRead = () => {
    return (
        <div className=' px-xPadding my-20 py-10'>
            <div className='flex items-center gap-3'>
                <p className='text-black w-1/6'>Most Read</p>
                <Line />
            </div>

            <div className="grid grid-cols-3 mx-20 divide-x gap-5">
                {
                    [1, 2, 3, 4, 5, 6].map((item: any, i: number) => {
                        return (
                            <div className='p-3 flex gap-2'>
                                <p className='text-defaultYellow text-[24px] font-[600]'>{i + 1}.</p>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-[500]'>Romeo Lavia to Miss The Remainder of 2023/24 Season</p>

                                    <div className="flex items-center text-[12px] justify-between">
                                        <p>March 15, 2024</p>

                                        <div className='flex gap-3'>
                                            <RiHeart2Line />
                                            <RiChat2Line />
                                            <RiShareForward2Line />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MostRead