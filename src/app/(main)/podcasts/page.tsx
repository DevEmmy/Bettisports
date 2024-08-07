"use client"
import Preview from '@/components/Podcast/Preview'
import CarouselComponent from '@/components/Shared/CarouselComponent'
import HorizontalHeader from '@/components/Shared/HorizontalHeader'
import React from 'react'

const page = () => {

  return (
    <div className='mx-xPadding flex flex-col gap-10 py-10'>

      <CarouselComponent>

        <div className='relative h-[600px] rounded-2xl'>
          <img src="./img.jpg" alt="" className='h-full rounded-2xl w-full object-cover' />
          <div className="overlay rounded-2xl" />
          <div className='text-white text-start absolute bottom-10 left-10 z-[1000]'>
            <p className='font-[600] text-[28px] '>PODCAST TITLE</p>
            <p className='text-[14px]'>March 24 - 35min</p>
            <p className='text-[16px]'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
          </div>
        </div>

        <div className='relative h-[600px] rounded-2xl'>
          <img src="./img.jpg" alt="" className='h-full rounded-2xl w-full object-cover' />
          <div className="overlay rounded-2xl" />
          <div className='text-white text-start absolute bottom-10 left-10 z-[1000]'>
            <p className='font-[600] text-[28px] '>PODCAST TITLE</p>
            <p className='text-[14px]'>March 24 - 35min</p>
            <p className='text-[16px]'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
          </div>
        </div>

      </CarouselComponent>

      <HorizontalHeader text='Popular' endText='POPULAR PODCASTS YOU DON’T WANT TO MISS' />

      <div className="grid grid-cols-5 gap-5">
        {
          [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]?.map((item, i) => {
            return (
              <Preview key={i} />
            )
          })
        }
      </div>

      <HorizontalHeader text='Recents' endText='Latest podcast for you' />

      <div className="grid grid-cols-5 gap-5">
        {
          [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]?.map((item, i) => {
            return (
              <Preview key={i} />
            )
          })
        }
      </div>

      <HorizontalHeader text='for you' endText='picks just for you' />

      <div className="grid grid-cols-5 gap-5">
        {
          [1, 2, 3, 4, 5]?.map((item, i) => {
            return (
              <Preview key={i} />
            )
          })
        }
      </div>
    </div>
  )
}

export default page