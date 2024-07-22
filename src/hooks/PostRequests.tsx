'use client';
import { axiosConfig } from '@/utils/axiosConfig';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const api = process.env.NEXT_PUBLIC_API as string;

// Fetch Polls
export const useFetchFeeds = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/feeds`);
    return response.data.reverse();
  };

  const { data: feeds, isError, isLoading, refetch  } = useQuery('feeds', fetchData, {
    enabled: true
  });

  return { feeds, isError, isLoading, refetch };
};

// Posts
export const usePostQuery = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts`);
    return response.data.payload;
  };

  const { data: posts, isError, isLoading } = useQuery('posts', fetchData);

  return { posts, isError, isLoading };
};

// Category
export const useFetchCategory = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/categories`);
    return response.data.payload;
  };

  const { data: categories, isError, isLoading } = useQuery('categories', fetchData);

  return { categories, isError, isLoading };
};

// allcomments
export const useFetchComments = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/comments`);
    console.log(response);
    return response.data.payload;
  };

  const {
    data: comments, isError: isErr, isLoading } = useQuery('comments', fetchData);

  return { comments, isErr, isLoading};
};

// Read Query
export const useReadQuery = (id: string) => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/read/${id}`);
    console.log(response);
    return response.data.payload;
  };
  fetchData();
};

// Fetch Comments by postID
export const useFetchPostComment = (id: string) => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/comments/post/${id}`);
    console.log(response);
    return response.data.payload;
  };

  const {
    data: comments,
    isError: isErr,
    isLoading: isLoad,
    refetch,
  } = useQuery('comments-post', fetchData, {
    enabled: true,
  });

  return { comments, isErr, isLoad, refetch };
};

// Each Post
export const useEachPostQuery = (id: string) => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/${id}`);
    console.log(response);
    return response.data.payload;
  };

  const { data: post, isError, isLoading } = useQuery(id, fetchData);

  return { post, isError, isLoading };
};

// Fetch Polls
export const useFetchPolls = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/polls`);
    return response.data.payload;
  };

  const { data: polls, isError, isLoading, refetch } = useQuery('polls', fetchData , {
    enabled: true,
  });

  return { polls, isError, isLoading , refetch};
};


// Editor Pick
export const useFetchEditorsPick = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/editors`);
    return response.data.payload;
  };

  const { data: posts, isError, isLoading } = useQuery('editors', fetchData);

  return { posts, isError, isLoading };
};

// Trending
export const useFetchTrending = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/trending`);
    return response.data.payload;
  };

  const {
    data: trending,
    isError,
    isLoading,
  } = useQuery('trending', fetchData);
  return { trending, isError, isLoading };
};

// News-Breaking
export const useFetchNewsBreaking = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/news-breaking`);
    return response.data.payload;
  };

  const {
    data: newsBreaking,
    isError,
    isLoading,
  } = useQuery('news-breaking', fetchData);
  return { newsBreaking, isError, isLoading };
};

// Featured
export const useFetchFeatured = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/featured`);
    return response.data.payload;
  };

  const {
    data: featured,
    isError,
    isLoading,
  } = useQuery('featured', fetchData);
  return { featured, isError, isLoading };
};
// stories
export const useFetchStories = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/stories`);
    return response.data.payload;
  };

  const { data: stories, isError, isLoading } = useQuery('stories', fetchData);
  return { stories, isError, isLoading };
};
// ForyOU
export const useFetchForYou = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/for-you`);
    return response.data.payload;
  };

  const { data: forYou, isError, isLoading } = useQuery('for-you', fetchData);
  return { forYou, isError, isLoading };
};
// popular
export const useFetchPopular = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/popular`);
    return response.data.payload;
  };

  const { data: popular, isError, isLoading } = useQuery('popular', fetchData);
  return { popular, isError, isLoading };
};
// photosplash
export const useFetchPhotoSplash = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/photo-splash`);
    return response.data.payload;
  };

  const {
    data: photoSplash,
    isError,
    isLoading,
  } = useQuery('photo-splash', fetchData);
  return { photoSplash, isError, isLoading };
};
// Infocus
export const useFetchInFocus = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/in-focus`);
    return response.data.payload;
  };

  const { data: inFocus, isError, isLoading } = useQuery('in-focus', fetchData);
  return { inFocus, isError, isLoading };
};

// article
export const useFetchArticle = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/article`);
    return response.data.payload;
  };

  const { data: article, isError, isLoading } = useQuery('article', fetchData);

  return { article, isError, isLoading };
};

// Fantasy
export const useFetchFantasy = () => {
  const fetchData = async () => {
    const response = await axios.get(`${api}/posts/class/fantasy`);
    return response.data.payload;
  };

  const { data: fantasy, isError, isLoading } = useQuery('fantasy', fetchData);
  return { fantasy, isError, isLoading };
};

// Post section

export const useCreatePost = () => {
  const createPost = async (data: any) => {
    let response = await axiosConfig.post('/posts', data);
    response = response.data.payload;
    return response;
  };

  const {
    mutate: createPostFn,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(createPost);
  return { createPostFn, isLoading, isError, error, isSuccess };
};

export const useSuscribeNewsletter = () => {
  const suscribe = async (data: any) => {
    let response = await axiosConfig.post('/newsletter/subscribe', data);
    response = response.data.payload;
    return response;
  };

  const {
    mutate: suscribeNewsletterFn,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(suscribe);

  return { suscribeNewsletterFn, isLoading, isError, error, isSuccess };
};

export const useCreatePoll = () => {
  const createPoll = async (data: any) => {
    let response = await axiosConfig.post('/polls', data);
    response = response.data.payload;
    return response;
  };

  const {
    mutate: createPollFn,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(createPoll);

  return { createPollFn, isLoading, isError, error, isSuccess };
};

export const useVotePoll = () => {
  const votePoll = async (data: any) => {
    let response = await axiosConfig.post('/polls/vote', data);
    response = response.data.payload;
    return response;
  };

  const {
    mutate: votePollFn,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(votePoll);

  return { votePollFn, isLoading, isError, error, isSuccess };
};

export const useCreateComment = () => {
  const createComment = async (data: any) => {
    let response = await axiosConfig.post('/comments', data);
    response = response.data.payload;
    // useFetchPostComment(data.inResponse);
    return response;
  };

  const {
    mutate: createCommentFn,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(createComment);

  return { createCommentFn, isLoading, isError, error, isSuccess };
};

export const useCreateCategory = () => {
  const createCategory = async (data: any) => {
    let response = await axiosConfig.post('/categories', data);
    response = response.data.payload;
    return response;
  };

  const { mutate: createCategoryFn, isLoading : isLoad , isError : isErr, error, isSuccess} = useMutation(createCategory);
  return { createCategoryFn, isLoad , isErr, error, isSuccess };
};

export const useCreateFeed = () => {
  const createFeed = async (data: any) => {
    let response = await axiosConfig.post('/feeds', data);
    response = response.data.payload;
    return response;
  };

  const { mutate: createFeedFn, isLoading : createFeedLoading, isError, error, isSuccess} = useMutation(createFeed);
  return { createFeedFn, createFeedLoading  , isError , error, isSuccess };
};

export const useUpdatePoll = (id : string) => {
  const updateData = async (data: any) => {
    const response = await axios.put(`${api}/polls/${id}`);
    return response.data.payload;
  }

const { mutate: updatePollFn, isLoading : isLoad , isError : isErr, error, isSuccess} = useMutation(updateData);
return { updatePollFn, isLoad , isErr, error, isSuccess };
};