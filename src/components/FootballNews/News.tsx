import React from 'react'
import EachNews from './EachNews'
import { useFetchNewsBreaking } from '@/hooks/PostRequests'
import Loader from '../Loader'

const News = () => {
    const { newsBreaking, isLoading } = useFetchNewsBreaking()
    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='row-span-2'>
                            <EachNews item={newsBreaking[0]} />
                        </div>
                        {
                            newsBreaking.map((news: any, i: number) => {
                                return (
                                    <EachNews item={news} />
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default News