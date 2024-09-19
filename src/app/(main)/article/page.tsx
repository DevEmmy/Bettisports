'use client';
import EachBlog from '@/components/Blog/EachBlog'
import CategoricalNews from '@/components/HeroHighlight/CategoricalNews'
import React from 'react'
import { useFetchArticle } from '@/hooks/PostRequests'
import { Post } from '@/requests/dto';
import Loader from '@/components/Loader';

const page = () => {
    const {article, isError, isLoading} = useFetchArticle();
    return (
        <div className='my-10'>
            <p className='px-5 md:px-xPadding my-5 text-[24px] font-[600]'>Category: Article</p>

            <div className='md:grid md:grid-cols-[2fr_1fr] px-5 md:px-xPadding gap-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
                    {
                        isLoading? <Loader /> : 
                        article?.length > 0 ?
                        article?.map((item : Post, i : number) => {
                            return (
                                <EachBlog key={i} item={item}/>
                                // <div key={i} className='bg-primary1'>Each</div>
                            )
                        })
                        : (
                            <p>
                                There is no Article
                            </p>
                        )
                    }
                </div>

                <CategoricalNews />
            </div>
        </div>
    )
}

export default page