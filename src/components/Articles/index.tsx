'use client';
import React from 'react'
import Line from '../UI/Line'
import EachNews from '../FootballNews/EachNews'
import Loader from '../Loader'
import { useFetchArticle } from '@/hooks/PostRequests'

const Articles = () => {
    const { article,isError,isLoading} = useFetchArticle();
    return (
        <div className='flex flex-col gap-5 mx-xPadding'>
            <h1 className='font-[600]'>MORE STORIES</h1>
            <Line />

            <div className="grid grid-cols-5 gap-5">
                {
                    isLoading ?
                    <Loader/>
                    :
                    article > 0 ?
                    article.slice(0,10)?.map((item: any, i: number)=>{
                        return(
                            <EachNews item={item} key={i} />
                        )
                    })
                    :
                    (
                        <p>
                            There are no stories left.
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Articles