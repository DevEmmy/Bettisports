'use client';
import React from 'react'
import { RiChat1Fill } from 'react-icons/ri';
import TableData from './TableData'
import { useFetchComments } from '@/hooks/PostRequests';
import Loader from '../Loader';

interface Props {
    thead: string[];
    data: any
}

interface Data {
    comment: any;
    i : number;
}


const Table = () => {
    const { comments, isErr, isLoading } = useFetchComments();
    // console.log(comments?.data);
    let thead = [
        "Author", "Comment", "In Response to", "Submitted on"
    ]
    return (
        <div className='table bg-white border text-xs'>
            <div className='grid ' style={{ gridTemplateColumns: `repeat(${thead.length + 1}, 1fr)` }}>
                {
                    thead?.map((head: string, i: number) => {
                        return (
                            <div className={`flex items-center  p-5 ${i == 1 && "col-span-2"} text-xs`} key={i}>{head}</div>
                        )
                    })
                }
            </div>

            <div className='grid gap-5 bg-[#FAFAF1] p-5' >
                {isLoading ? <Loader /> : comments?.length > 0 ?
                    comments?.map((item : any,i : number) => {
                        return (
                            <TableData key={i} item={item} />
                        )
                    }) : 
                    (
                        <p>There are no comments yet.</p>
                    )
                }
            </div>
        </div>
    )
}

export default Table