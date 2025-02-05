'use client';
import React from 'react'
import Line from '../UI/Line'
import EachNews from '../FootballNews/EachNews'
import Loader from '../Loader'
import { useFetchArticle, useFetchNewsBreaking } from '@/hooks/PostRequests'
import SectionHead from '../UI/SectionHead';

const Articles = () => {
    const { article,isError,isLoading} = useFetchArticle();
    // const { newsBreaking, isError, isLoading } = useFetchNewsBreaking();
    return (
        <div className='flex flex-col my-5 md:my-smXPadding gap-5 px-4 md:px-xPadding' id='article'>
            {/* <h1 className='font-[600]'>MORE ARTICLES</h1> */}
            <SectionHead title='Articles' />
            <Line />

            <div className="md:grid md:grid-cols-5 gap-5">
                {
                    isLoading ?
                    <Loader/>
                    :
                    article?.length > 0 ?
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
                            There are no articles left.
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Articles