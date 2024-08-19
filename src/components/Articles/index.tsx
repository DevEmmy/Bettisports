'use client';
import React from 'react'
import Line from '../UI/Line'
import EachNews from '../FootballNews/EachNews'
import Loader from '../Loader'
import { useFetchArticle } from '@/hooks/PostRequests'

const Articles = () => {
    const { article,isError,isLoading} = useFetchArticle();
    return (
        <div className='flex flex-col my-5 md:my-smXPadding gap-5 px-4 md:px-xPadding'>
            <h1 className='font-[600]'>MORE STORIES</h1>
            <Line />

            <div className="md:grid md:grid-cols-5 gap-5">
                {
                    isLoading ?
                    <Loader/>
                    :
                    article > 0 ?
                    article.slice(0,10)?.map((item: any, i: number)=>{
                        return(
                            <div className="my-3 md:my-0">
                                <EachNews item={item} key={i} />
                            </div>
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