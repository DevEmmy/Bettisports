import React from 'react';
import { RiChat1Fill } from 'react-icons/ri';
import Loader from '../Loader';
import { usePostQuery } from '@/hooks/PostRequests';
import { IoIosThermometer } from 'react-icons/io';
import TimeAgo from 'react-timeago';
import EditPosts from '../Edit/EditPosts';

interface Props {
  thead: string[];
  data: any;
  isLoading?: boolean | null;
}

interface PostProps {
  _id: string;
  title: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    likes: string[];
    saved: string[];
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  content: string;
  media: string;
  publish: boolean;
  categories: string[];
  likes: string[];
  menCategories: string[];
  womenCategories: string[];
  excerpt: string;
  format: string;
  tags: string[];
  featuredImage: string;
  nationality: string;
  highlight: string;
  photoSplash: boolean;
  slug: string;
  fantasy: boolean;
  editorsPick: boolean;
  newsBreaking: boolean;
  reads: number;
  featured: boolean;
  article: boolean;
  inFocus: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const PostsTable = () => {
  const { posts, isError, isLoading } = usePostQuery();
  return (
    <table className='w-full'>
      <tr className='text-sm'>
        <th>
          <input type='checkbox' name='' id='' />
        </th>
        {['Title', 'Author', 'Categories', 'Tags', 'Comment', 'Date'].map(
          (head: string, i: number) => {
            return (
              <th className='text-sm' key={i}>
                {head != 'Comment' ? (
                  head
                ) : (
                  <img
                    src='/commentIcon.svg'
                    className='w-5 h-5 object-contain'
                  />
                )}
              </th>
            );
          }
        )}
      </tr>

      {isLoading ? (
        <Loader />
      ) : posts?.length > 0 ? (
        posts?.map((item: PostProps, i: number) => {
          console.log(posts);
          while (i < 50) {
            return (
              <tr className='text-left gap-1 text-sm items-start' key={i}>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-[#197DDA]'>
                  <div className='text-[16px]'>
                    {item?.title.length > 120
                      ? `
                      ${item?.title.slice(0, 119)}...`
                      : item?.title}
                    {item?.publish ? (
                      ''
                    ) : (
                      <span className='text-black text-xs'>- Draft</span>
                    )}
                  </div>
                  <EditPosts post={item} />
                </td>
                <td>{item?.author.firstName + ' ' + item?.author.lastName}</td>
                <td>{item?.categories}</td>
                <td>
                  {item?.tags.length > 0 ? (
                    item?.tags?.map((tag: any, i: number) => (
                      <span className={`text-green-500`} key={i}>
                        {/* {tag}  */}
                        {i != 0 ? ', ' : ''}
                        {tag}
                      </span>
                    ))
                  ) : (
                    <img src='/hr.svg' className='w-5 h-5 object-contain' />
                  )}
                </td>
                <td>{item?.reads}</td>
                <td>
                  {' '}
                  published <br />
                  <TimeAgo date={item?.createdAt || 'july 3, 2024'} />
                </td>
              </tr>
            );
          }
        })
      ) : (
        <p className='text-center py-5 text-sm font-semibold'>
          No Posts Available
        </p>
      )}
    </table>
  );
};

export default PostsTable;
