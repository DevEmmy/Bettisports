"use client"
import Preview from '@/components/Podcast/Preview'
import CarouselComponent from '@/components/Shared/CarouselComponent'
import HorizontalHeader from '@/components/Shared/HorizontalHeader'
import React from 'react'
import { useFetchPodCast } from '@/hooks/PostRequests'
import Loader from '@/components/Loader';
import { Post } from '@/requests/dto'
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';

const page = () => {

  const {podcast, isError, isLoading} = useFetchPodCast();
  return (
    <>
      <div className=' mx-5 md:mx-xPadding flex flex-col gap-10 py-10'>

        <div className='grid md:grid-cols-[4fr__1fr] gap-6'>
          
          <div className='flex flex-col justify-between'>
            <CarouselComponent>

              {
                isLoading ? <Loader /> :
                podcast?.length > 0 ?
                podcast?.map((item: any, i : number) => 
                (
                  <div className='relative h-[600px] rounded-2xl'>
                      <img src={item?.media} alt="" className='h-full rounded-2xl w-full object-cover' />
                      <div className="overlay rounded-2xl" />
                      <div className='text-white text-start absolute bottom-10 left-10 z-[1000]'>
                        <p className='font-[600] text-[28px] '>
                          {item?.title}
                        </p>
                        <p className='text-[14px] flex gap-3 items-center'>
                          <TimeAgo date={item?.createdAt} />
                        </p>
                        <p className='text-[16px]'>
                          {parser(item?.content)}
                        </p>
                      </div>
                    </div>
                ) ) :
                (
                  <p>There is no podcast</p>
                )
              }
              
            </CarouselComponent>
  
            <img src='./hero2.png' alt='' className='mt-4' />
  
          </div>
  
          <div>
            <HorizontalHeader text='Popular' endText='' />
  
            <div className="flex flex-col gap-5 my-2">
            {
              podcast?.map((item : Post, i : number) => {
                return (
                <div className='flex md:gap-1 flex-col md:my-0 my-3 rounded-2xl' key={i}>
                  <img src={item?.media} alt="" className=' max-h-[130px]'/>
                  
                  <p className='font-[600] text-sm'>
                    {item?.title}
                  </p>
                  <p className='text-[11px]'>
                    <TimeAgo date={item?.createdAt} />
                  </p>
                  <p className='text-[12px]'>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
                </div>
                )
              })
            }
            </div>
          </div>
        </div>
  
        <HorizontalHeader text='Recent' />
  
        <div className="md:grid grid-cols-5 gap-5 my-2">
          {
            // slice(14,30)
            podcast?.map((item : Post, i : number) => {
              return (
                <Preview key={i} item={item}/>
              )
            })
          }
        </div>
  
        <HorizontalHeader text='More Podcasts' />
  
        <div className="md:grid grid-cols-5 gap-5 my-2">
          {
            // .slice(30,46)
            podcast?.map((item : Post, i : any) => {
              return (
                <Preview key={i} item={item} />
              )
            })
          }
        </div>
  
      </div>
    </>
  )
}

export default page