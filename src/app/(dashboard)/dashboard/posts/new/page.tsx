'use client';
import OverviewContainer from '@/components/Shared/OverviewContainer';
import dynamic from 'next/dynamic';
import React, {
  useMemo,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import { HiCog } from 'react-icons/hi';
import {
  RiCalendar2Fill,
  RiGalleryLine,
  RiGalleryUploadLine,
  RiKeyLine,
  RiMicLine,
  RiPinDistanceLine,
  RiVideoLine,
} from 'react-icons/ri';
import 'react-quill/dist/quill.snow.css';
import FileBase64 from 'react-file-base64';
import { useCreatePost } from '@/hooks/PostRequests';
import Loader from '@/components/Loader';
import { toastSuccess } from '@/utils/toast';
import { LuGalleryHorizontal } from 'react-icons/lu';

interface FormatOption {
  text: string;
  icon: React.ReactNode;
  value: string;
}

const Page: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [media, setMedia] = useState<string>('');
  const [publish, setPublish] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [menCategories, setMenCategories] = useState<string[]>([]);
  const [womenCategories, setWomenCategories] = useState<string[]>([]);
  const [excerpt, setExcerpt] = useState<string>('');
  const [format, setFormat] = useState<string>('standard');
  const [tags, setTags] = useState<string[]>([]);
  const [featuredImage, setFeaturedImage] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [highlight, setHighlight] = useState<string>('');
  const [photoSplash, setPhotoSplash] = useState<boolean>(false);
  const [slug, setSlug] = useState<string>('');
  const [fantasy, setFantasy] = useState<boolean>(false);
  const [editorsPick, setEditorsPick] = useState<boolean>(false);
  const [newsBreaking, setNewsBreaking] = useState<boolean>(false);
  const [article, setArticle] = useState<boolean>(false);
  const [inFocus, setInFocus] = useState<boolean>(false);

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

  const formats: FormatOption[] = [
    { text: 'Standard', icon: <RiPinDistanceLine />, value: 'standard' },
    { text: 'Photosplash', icon: <RiGalleryLine />, value: 'gallery' },
    { text: 'Stories', icon: <LuGalleryHorizontal />, value: 'video' },
    { text: 'Podcast', icon: <RiMicLine />, value: 'podcast' },
    { text: 'Video', icon: <RiVideoLine />, value: 'video' },
  ];

  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  const { createPostFn, error, isError, isLoading, isSuccess } =
    useCreatePost();

  const handleSubmit = async () => {
    const postData = {
      title,
      author,
      content,
      media,
      publish,
      categories,
      menCategories,
      womenCategories,
      excerpt,
      format,
      tags,
      featuredImage,
      nationality,
      highlight,
      photoSplash,
      slug,
      fantasy,
      editorsPick,
      newsBreaking,
      article,
      inFocus,
    };

    try {
      createPostFn(postData);
      console.log('Success:', postData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTagKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const handleCategoryChange = (
    gender: string,
    category: string,
    checked: boolean
  ) => {
    const updateCategories = (currentCategories: string[]) =>
      checked
        ? [...currentCategories, category]
        : currentCategories.filter((cat) => cat !== category);

    if (gender === 'Men') {
      setMenCategories(updateCategories(menCategories));
    } else {
      setWomenCategories(updateCategories(womenCategories));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toastSuccess('Post Uploaded');
    }
  }, [isSuccess]);

  return (
    <div className='flex flex-col gap-5'>
      <p className='text-[20px] font-[600]'>Add New Post</p>

      <div className='md:grid grid-cols-[3fr_1fr] items-start gap-5'>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Add title'
            className='border p-3 w-full'
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
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
            value={content}
            onChange={setContent}
            className='h-[300px] bg-white'
          />

          <button className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit '>
            {media ? (
              <img
                src={media}
                alt=''
                className='w-full object-cover h-[40vh]'
              />
            ) : (
              <>
                {' '}
                <HiCog />
                Add Media
              </>
            )}
          </button>

          <FileBase64
            multiple={false}
            onDone={(base64: any) => setMedia(base64.base64)}
          />

          <OverviewContainer title={'Excerpt'}>
            <div className='flex gap-2 flex-col'>
              <textarea
                className='h-[100px] p-3 focus:outline-none resize-none border'
                value={excerpt}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setExcerpt(e.target.value)
                }
              />
              <p>
                Excerpts are optional hand-crafted summaries of your content
                that can be used in your theme.
              </p>
            </div>
          </OverviewContainer>

          <button
            className={`border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit ${
              isLoading && 'opacity-70'
            }`}
            onClick={handleSubmit}>
            {isLoading ? 'submitting...' : 'submit'}
          </button>
        </div>

        <div className='flex flex-col gap-10'>
          <OverviewContainer title={'Publish'} buttonText={'Publish'}>
            <div className='flex flex-col gap-3'>
              <button
                className='border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit'
                onClick={() => setPublish(true)}>
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

          <OverviewContainer title={'Format'}>
            <div className='flex flex-col gap-2'>
              {formats?.map((item, idx) => (
                <div
                  key={idx}
                  className='flex justify-between gap-3 border-b py-3'
                  onClick={() => setFormat(item?.value)}>
                  <div className='items-center flex'>
                    {item?.icon} <p className='ml-2'>{item?.text}</p>
                  </div>

                  <input
                    type='radio'
                    name='format'
                    value={item?.value}
                    checked={format == item?.value ? true : false}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormat(e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </OverviewContainer>

          {format == 'standard' && (
            <OverviewContainer title={'Categories'}>
            <div>
              <div className='flex gap-3 divide-x border-b py-3'>
                <p>All Categories</p>
                <p className='text-secondaryBlue pl-3'>Most Used</p>
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  checked={article}
                  onChange={() => setArticle(!article)}
                />
                <p>Article</p>
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  checked={editorsPick}
                  onChange={() => setEditorsPick(!editorsPick)}
                />
                <p>Editor's Picks</p>
              </div>

              <div className='flex-center gap-3 border-b py-3'>
                <input
                  type='checkbox'
                  checked={newsBreaking}
                  onChange={() => setNewsBreaking(!newsBreaking)}
                />
                <p>News Breaking</p>
              </div>
              

              <div className='grid grid-cols-2 justify-between my-5'>
                {gender?.map((g, i) => (
                  <div key={i} className='flex flex-col gap-2'>
                    <p className='text-[16px] font-[600] text-secondaryBlue'>
                      {g}
                    </p>
                    {categoriesList?.map((c, j) => (
                      <div key={j} className='flex-center gap-3 text-sm'>
                        <input
                          type='checkbox'
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleCategoryChange(g, c, e.target.checked)
                          }
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
                  checked={fantasy}
                  onChange={() => setFantasy(!fantasy)}
                />
                <p>Fantasy</p>
              </div>

              <p className='text-secondaryBlue underline p-4 text-sm'>
                + Add New Category
              </p>
            </div>
            </OverviewContainer>
          )}

          <OverviewContainer title={'Tags'}>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  className='border border-gray-500 focus:outline-none px-3 p-2'
                  // onKeyPress={handleTagKeyPress}
                  value={tags}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTags(e.target.value.replace(/\s+/g, '').split(','))
                  }
                />
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

export default Page;
