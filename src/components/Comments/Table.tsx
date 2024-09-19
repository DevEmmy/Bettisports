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


const CommentTable = () => {
    const { comments, isErr, isLoading } = useFetchComments();
    // console.log(comments?.data);
    let thead = [
        "Author", "Comment", "In Response to", "Submitted on"
    ]
    return (
        <table className='table bg-white border text-sm overflow-x-auto'>
            <tr>
                <th>
                    <input type='checkbox' />
                </th>
                {
                    thead?.map((head: string, i: number) => {
                        return (
                            <th className={`tems-center text-xs`} key={i}>{head}</th>
                        )
                    })
                }
            </tr>

            {/* <div className='grid gap-5 bg-[#FAFAF1] p-5' >
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
            </div> */}

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
        </table>
    )
}

export default CommentTable