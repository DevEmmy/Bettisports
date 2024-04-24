import React from 'react'
import Line from '../UI/Line'
import Each from './Each'

const Podcast = () => {
  return (
    <div className='bg-[#25282B] px-xPadding my-20 py-10'>
            <div className='flex items-center gap-3'>
                <p className='text-white'>PODCASTS</p>
                <Line />
            </div>

            <div className='grid grid-cols-[3fr_1fr] mt-10 gap-5'>
                <div className='relative'>
                    <img src="./img.jpg" alt="" />
                    <div className="overlay" />
                    <div className="details p-10 flex flex-col gap-2">
                        <p className='text-[28px] font-[700]'>PODCAST TITLE</p>
                        <p className='text-sm'>March 28, 2024 | 25min</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Adipiscing nisi suspendisse ullamcorper ornare nunc in. Massa habitasse enim nunc eu enim nulla risus adipiscing. Id eleifend faucibus sit semper id faucibus magna. Etiam a in dolor pulvinar congue. Nibh adipiscing maecenas urna blandit ultrices a diam tempus quam.</p>
                    </div>
                </div>

                <div className="flex flex-col divide-y">
                    {
                        [1, 2, 3,4,5,6,7].map((video: any, i: number) => {
                            return (
                                <Each key={i} />
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Podcast