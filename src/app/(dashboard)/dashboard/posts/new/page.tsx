'use client';
import OverviewContainer from '@/components/Shared/OverviewContainer';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';
import { HiCog } from 'react-icons/hi';
import {
  RiCalendar2Fill,
  RiGalleryLine,
  RiKeyLine,
  RiMicLine,
  RiPinDistanceLine,
  RiVideoLine,
} from 'react-icons/ri';
import 'react-quill/dist/quill.snow.css';
import { api } from '@/hooks/PostRequests';
import { toastError } from '@/utils/toast';

const page = () => {
//   const [title, setTitle] = useState<string>('');
//   const [author, setAuthor] = useState<string>('');
//   const [content, setContent] = useState<string>('');
//   const [media, setMedia] = useState<string>('');
//   const [publish, setPublish] = useState<boolean>(false);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [menCategories, setMenCategories] = useState<any[]>([]);
//   const [womenCategories, setWomenCategories] = useState<any[]>([]);
//   const [excerpt, setExcerpt] = useState<string>('');
//   const [format, setFormat] = useState<string>('');
//   const [tags, setTags] = useState<any[]>([]);
//   const [featuredImage, setFeaturedImage] = useState<string>('');
//   const [nationality, setNationality] = useState<string>('');
//   const [highlight, setHighlight] = useState<string>('');
//   const [photoSplash, setPhotoSplash] = useState<boolean>(false);
//   const [slug, setSlug] = useState<string>('');
//   const [fantasy, setFantasy] = useState<boolean>(false);
//   const [editorsPick, setEditorsPick] = useState<boolean>(false);
//   const [newsBreaking, setNewsBreaking] = useState<boolean>(false);
//   const [article, setArticle] = useState<boolean>(false);
//   const [inFocus, setInFocus] = useState<boolean>(false);

  const [form, setForm] = useState<any>({
    title: '',
    author: '',
    content: '',
    media: '',
    publish: false,
    categories: [''],
    menCategories: [''],
    womenCategories: [''],
    excerpt: '',
    format: '',
    tags: [''],
    featuredImage: '',
    nationality: '',
    highlight: '',
    photoSplash: '',
    slug: '',
    fantasy: false,
    editorsPick: false,
    newsBreaking: false,
    comments: '',
    reads: 0,
    featured: false,
  });

  const gender = ['Men', 'Women'];

  const categoriesList = [
    'Featured',
    'News',
    'Transfers',
    'Articles',
    'Matchdays',
    'Interviews',
    'Fantasy',
    'Betting',
  ];

  const formats = [
    {
      text: 'Standard',
      icon: <RiPinDistanceLine />,
      value: 'standard',
    },
    {
      text: 'Gallery',
      icon: <RiGalleryLine />,
      value: 'gallery',
    },
    {
      text: 'Video',
      icon: <RiVideoLine />,
      value: 'video',
    },
    {
      text: 'Podcast',
      icon: <RiMicLine />,
      value: 'podcast',
    },
  ];

  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.title === '' || form.author === '' || form.content === '' || form.media === '') {
        toastError("Title, author, content or media is empty ");
    }

    try {
      const response = await fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error: any) {
      toastError(error);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <p className='text-[20px] font-[600]'>Add New Post</p>

      <div className='grid grid-cols-[3fr_1fr] gap-5'>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Add title'
            className='border p-3 w-full'
            // value={form?.title}
            onChange={(e) => setForm({ ...form, title: e })}
          />
          <div className='flex-center gap-10'>
            <p>
              Permalink:{' '}
              <span className='text-secondaryBlue'>https://et.gg.com//</span>
            </p>
            <button className='border border-secondaryBlue text-secondaryBlue p-2  px-4 text-xs'>
              Edit
            </button>
          </div>

          <ReactQuill
            theme='snow'
            // value={form?.content}
            onChange={(e) => setForm({ ...form, content: e })}
            className='h-[300px] bg-white'
          />

          <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit '>
            <HiCog />
            Add Media
          </button>

          <OverviewContainer title={'Excerpt'}>
            <div className='flex gap-2 flex-col'>
              <textarea
                className='h-[100px] p-3 focus:outline-none resize-none border'
                // value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e })}
              />

              <p>
                Excerpts are optional hand-crafted summaries of your content
                that can be used in your theme.
              </p>
            </div>
          </OverviewContainer>

          <OverviewContainer title={'Author'}>
            <div className='flex gap-2 flex-col'>
              <select
                className='w-fit p-3 bg-white border focus:outline'
                // value={form.author}
                onChange={(e) => setForm({ ...form, author: e })}>
                <option value=''>Idowu Williams</option>
              </select>
            </div>
          </OverviewContainer>
        </div>

        <div className='flex flex-col gap-10'>
          <OverviewContainer title={'Publish'} buttonText={'Publish'}>
            <div className='flex flex-col gap-3'>
              <button
                className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit'
                onClick={() => setForm({...form,publish: false})}>
                Save Draft
              </button>

              <p className='flex gap-2 items-center'>
                <RiKeyLine />
                Status: <span className='font-[600]'>Draft</span>{' '}
                <span className='text-secondaryBlue underline'>Edit</span>
              </p>

              <p className='flex gap-2 items-center'>
                <RiCalendar2Fill />
                Publish: <span className='font-[600]'>Immediately</span>{' '}
                <span className='text-secondaryBlue underline'>Edit</span>
              </p>
            </div>
          </OverviewContainer>

          <OverviewContainer title={'Categories'}>
            <div>
              <div className='flex gap-3 divide-x border-b py-3'>
                <p>All Categories</p>
                <p className='text-secondaryBlue pl-3'>Most Used</p>
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  checked={form.editorsPick}
                  onChange={(e) => {
                    setForm({ ...form, editorsPick: !form.editorsPick });
                  }}
                />
                <p>Editor's Picks</p>
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  name='newsBreaking'
                  checked={form.newsBreaking}
                  onChange={(e) =>
                    setForm({ ...form, newsBreaking: !form.newsBreaking })
                  }
                />,
                <p>News Breaking</p>
              </div>

              <div className='grid grid-cols-2 justify-between my-5'>
                {gender.map((g, i) => (
                  <div key={i} className='flex flex-col gap-2'>
                    <p className='text-[16px] font-[600] text-secondaryBlue'>
                      {g}
                    </p>
                    {categoriesList.map((c, j) => (
                      <div key={j} className='flex-center gap-3 text-sm'>
                        <input
                          type='checkbox'
                          onChange={(e) => {
                            if (e.target.checked) {
                              g == 'Men'
                                ? setForm({
                                    ...form,
                                    menCategories: form.menCategories.push(e),
                                  })
                                : setForm({
                                    ...form,
                                    womenCategories: form.womenCategories.push(e),
                                  });
                            } else {
                                g == 'Men'
                                ? setForm({
                                    ...form,
                                    menCategories: form.menCategories.splice(form.menCategories.indexOf(e),1)
                                  })
                                : setForm({
                                    ...form,
                                    womenCategories: form.womenCategories.splice(form.womenCategories.indexOf(e),1)
                                  });
                            }
                          }}
                        />
                        <p>{c}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  checked={form.fantasy}
                  onChange={(e) => setForm({...form,fantasy: !form.fantasy})}
                />
                <p>Fantasy</p>
              </div>

              <p className='text-secondaryBlue underline p-4 text-sm'>
                + Add New Category
              </p>
            </div>
          </OverviewContainer>

          <OverviewContainer title={'Format'}>
            <div>
              {formats.map((f, i) => (
                <div className='flex-center gap-3 text-gray-600 ' key={i}>
                  <input
                    type='radio'
                    name='format'
                    value={form.format}
                    checked={form.format === f.value}
                    onChange={(e) => e.target.checked ? setForm({...form,format: f.text}) : setForm({...form, format: ''}) }
                  />
                  <p className='flex-center gap-2'>
                    {f.icon}
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </OverviewContainer>

          <OverviewContainer title={'Tags'}>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  className='border border-gray-500 focus:outline-none px-3'
                  onChange={(e) => setForm({...form, tags: e})}
                />
                <button className='border border-secondaryBlue text-secondaryBlue p-2 text-sm'>
                  Add
                </button>
              </div>

              <p>separate tags with commas</p>
              <p className='underline text-secondaryBlue'>
                Choose from most used tags
              </p>
            </div>
          </OverviewContainer>

          <OverviewContainer title={'Featured Image'}>
            <div>
              <p className='underline text-secondaryBlue'>Set Featured Image</p>
            </div>
          </OverviewContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
