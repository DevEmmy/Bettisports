"use client";
import React from 'react'
import PostedBy from './PostedBy'
import Articles from '../Articles'
import CommentForm from './CommentForm'
import Comments from './Comments'
import { RiBookmarkLine, RiFacebookLine, RiHeart2Line, RiLinkedinLine, RiShareLine, RiTwitterLine } from 'react-icons/ri'
import TitleHeader from '../UI/TitleHeader'
import Tag from './Tag'
import { useEachPostQuery, useFetchPostComment } from '@/hooks/PostRequests'
import Loader from '../Loader';
import parser from "html-react-parser"


interface Props {
    id: string
}

const BlogContent = ({ id }: Props) => {
    console.log(id);
    const { post, isError, isLoading } = useEachPostQuery(id)
    const { comments , isErr, isLoad} = useFetchPostComment(id)
    // console.log(comments)

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <p className='text-[12px]'>Category</p>
            <TitleHeader title={post.title} />
            <PostedBy author={post.author} createdAt={post.createdAt} />

            <div className='my-5 flex flex-col gap-5 text-[#25282B]'>
                <img src={post.media} alt={post.title} />
                <div>
                    {parser(post.content)}
                </div>
            </div>

            {/* <Comments id={`${id}`}/>  */}
            {
                isLoad ?
                <Loader />
                :
            comments.length > 0 ?
                
                <Comments comments={comments}/> 
            
             : (
                    <p>There are no comments</p>
                )
            }

            <CommentForm postId={id}/>
        </div>

    )
}

export default BlogContent