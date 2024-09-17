import React from 'react';
import Play from '../UI/Play';


interface VideoProps {
    video: {
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
      mediaType: string;
      __v: number;
    };
  }

const EachVideo = ({video} : VideoProps) => {
  return (
    <div className='relative'>
      <Play size={16} video={video} otherStyles='absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-2.5'/>
      <img src='./img.jpg' alt='' />
      <div className='overlay' />
      <div className='details p-5'>
        <p className='text-[11px]'>March 28, 2024</p>
        <p className=' font-[600] line-clamp-1'>
          Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links
        </p>
      </div>
    </div>
  );
};

export default EachVideo;
