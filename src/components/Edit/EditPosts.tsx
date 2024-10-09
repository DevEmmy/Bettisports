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
import { HiCog, HiX } from 'react-icons/hi';
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
import {useUpdatePostQuery, usePostQuery, useDeletePostQuery } from '@/hooks/PostRequests';
import { toastSuccess } from '@/utils/toast';
import { LuGalleryHorizontal } from 'react-icons/lu';
import Link from 'next/link';

interface FormatOption {
  text: string;
  icon: React.ReactNode;
  value: string;
}

interface Props {
  id: string;
  items: any;
}

const getTagString = (tags: string[]): string => {
  return tags.map((tag) => tag.trim()).join(', ');
};

interface PostProps {
  post: {
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
  };
}

interface Props {
  post: PostProps;
}

const EditPosts = ({ post }: PostProps) => {
  const { posts, isError, isLoading, refetch } = usePostQuery();
  const [showEdit, setShow] = useState(false);
  const [title, setTitle] = useState<string>(post?.title);
  const [author, setAuthor] = useState<any>(post?.author);
  const [content, setContent] = useState<string>(post?.content);
  const [media, setMedia] = useState<string>(post?.media);
  const [publish, setPublish] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [menCategories, setMenCategories] = useState<string[]>(
    post?.menCategories
  );
  const [womenCategories, setWomenCategories] = useState<string[]>(
    post?.womenCategories
  );
  const [excerpt, setExcerpt] = useState<string>(post?.excerpt);
  const [format, setFormat] = useState<string>('standard');
  const [tags, setTags] = useState<string[]>([]);
  const [featuredImage, setFeaturedImage] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [highlight, setHighlight] = useState<string>('');
  const [photoSplash, setPhotoSplash] = useState<boolean>(false);
  const [slug, setSlug] = useState<string>('');
  const [fantasy, setFantasy] = useState<boolean>(post?.fantasy);
  const [editorsPick, setEditorsPick] = useState<boolean>(post?.editorsPick);
  const [newsBreaking, setNewsBreaking] = useState<boolean>(post?.newsBreaking);
  const [article, setArticle] = useState<boolean>(post?.article);
  const [inFocus, setInFocus] = useState<boolean>(post?.inFocus);

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

  const { updatePostFn, error, isSuccess } = useUpdatePostQuery(post?._id);
  const { deletePostFn, deleteSuccess} = useDeletePostQuery(post?._id);


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
      updatePostFn(postData);
      console.log('Success:', postData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      deletePostFn();
      console.log('success')
    } catch (error) {
      console.log('Delete Error');
    }
  }

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
      toastSuccess('Post Updated');
      refetch();
      setShow(false)
    }
  }, [isSuccess]);

  useEffect(() => {
    if(deleteSuccess) { toastSuccess('Post deleted'); refetch(); }
  }, [deleteSuccess])

  return (
    <div>
      <div className='mt-1.5 flex gap-2 text-xs'>
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setShow(true)}>
          Edit
        </span>
        <span className='text-blue-600 border-x-2 px-2 flex cursor-pointer'>Quick Edit</span>
        <span className='text-red-700 border-r-2 pr-2 cursor-pointer' onClick={handleDelete}>Trash</span>
        <Link href={`/blog/${post?._id}`} className='text-blue-600 cursor-pointer' >View</Link>
      </div>
      {showEdit && (
        <div className='h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto grid place-items-center top-0 black__overlay fixed'>
          {/* <div className="black__overlay " onClick={() => setShow(false)} /> */}
          <div className='relative z-[99999] flex flex-col  gap-5 md:w-2/3 md:mt-6 left-0 right-0 top-0 bg-white p-10 md:gap-5'>
            <p className='text-[20px] font-[600]'>Edit Post </p>
            <div></div>

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
                    <span className='text-secondaryBlue'>
                      https://et.gg.com//
                    </span>
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
                      Excerpts are optional hand-crafted summaries of your
                      content that can be used in your theme.
                    </p>
                  </div>
                </OverviewContainer>

                <button
                  className={`border border-secondaryBlue text-secondaryBlue flex gap-2 px-5 items-center p-2 w-fit ${'opacity-70'}`}
                  onClick={handleSubmit}>
                  {'submit'}
                </button>
              </div>

              <div className='flex flex-col gap-10'>
                <OverviewContainer title={'Tags'}>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                      <input
                        type='text'
                        className='border border-gray-500 focus:outline-none px-3 p-2'
                        // onKeyPress={handleTagKeyPress}
                        value={getTagString(post?.tags)}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setTags(e.target.value.replace(/\s+/g, '')?.split(','))
                        }
                        contentEditable
                      />
                    </div>

                    <p>separate tags with commas</p>
                    <p className='underline text-secondaryBlue'>
                      Choose from most used tags
                    </p>
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
                            {categoriesList?.map((c, j) => {
                              let categories = [];
                              g == 'Men' ? categories = menCategories : categories = womenCategories;
                              return (
                                <div
                                  key={j}
                                  className='flex-center gap-3 text-sm'>
                                  <input
                                    type='checkbox'
                                    checked={
                                      categories.includes(c)
                                    }
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleCategoryChange(g,c,e.target.checked)}
                                  />
                                  <p>{c}</p>
                                </div>
                              );
                            })}
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
                      Publish: <span className='font-[600]'>
                        Immediately
                      </span>{' '}
                      <span className='text-secondaryBlue underline'>Edit</span>
                    </p>
                  </div>
                </OverviewContainer>

                {/* <OverviewContainer title={'Format'}>
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
                </OverviewContainer> */}

                <OverviewContainer title={'Featured Image'}>
                  <div>
                    <p className='underline text-secondaryBlue'>
                      Set Featured Image
                    </p>
                  </div>
                </OverviewContainer>
              </div>
            </div>

            <button
              onClick={() => setShow(false)}
              className='top-0 absolute right-0 text-gray-500 p-3'>
              <HiX className='cursor-pointer' size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPosts;
