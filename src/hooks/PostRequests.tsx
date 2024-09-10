'use client';
import { axiosConfig } from '@/utils/axiosConfig';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const api = process.env.NEXT_PUBLIC_API as string;

// Fetch Polls
export const useFetchFeeds = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/feeds');
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
    const response = await axiosConfig.get('/posts');
    return response.data.payload;
  };

  const { data: posts, isError, isLoading, refetch } = useQuery('posts', fetchData,  {
    enabled: true
  } );

  return { posts, isError, isLoading, refetch };
};

// Category
export const useFetchCategory = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/categories');
    return response.data.payload;
  };

  const { data: categories, isError, isLoading, refetch } = useQuery('categories', fetchData, {
    enabled: true,
  });

  return { categories, isError, isLoading, refetch };
};

// allcomments
export const useFetchComments = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/comments');
    console.log(response);
    return response.data.payload;
  };

  const {
    data: comments, isError: isErr, isLoading, refetch } = useQuery('comments', fetchData, {
      enabled: true
    });

  return { comments, isErr, isLoading, refetch};
};

// Read Query
export const useReadQuery = (id: string) => {
  const fetchData = async () => {
    const response = await axiosConfig.get(`/posts/read/${id}`);
    console.log(response);
    return response.data.payload;
  };
  fetchData();
};

// Fetch Comments by postID
export const useFetchPostComment = (id: string) => {
  const fetchData = async () => {
    const response = await axiosConfig.get(`/comments/post/${id}`);
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
};axios
// Each Post
export const useEachPostQuery = (id: string) => {
  const fetchData = async () => {
    const response = await axiosConfig.get(`/posts/${id}`);
    console.log(response);
    return response.data.payload;
  };

  const { data: post, isError, isLoading, refetch } = useQuery(id, fetchData , {
    enabled: true
  });

  return { post, isError, isLoading, refetch };
};

// Fetch Polls
export const useFetchPolls = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/polls');
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
    const response = await axiosConfig.get('/posts/class/editors');
    return response.data.payload;
  };

  const { data: posts, isError, isLoading } = useQuery('editors', fetchData);

  return { posts, isError, isLoading };
};

// Trending
export const useFetchTrending = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/trending');
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
    const response = await axiosConfig.get('/posts/class/news-breaking');
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
    const response = await axiosConfig.get('/posts/class/featured');
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
    const response = await axiosConfig.get('/posts/class/stories');
    return response.data.payload;
  };

  const { data: stories, isError, isLoading } = useQuery('stories', fetchData);
  return { stories, isError, isLoading };
};
// ForyOU
export const useFetchForYou = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/for-you');
    return response.data.payload;
  };

  const { data: forYou, isError, isLoading } = useQuery('for-you', fetchData);
  return { forYou, isError, isLoading };
};
// popular
export const useFetchPopular = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/popular');
    return response.data.payload;
  };

  const { data: popular, isError, isLoading } = useQuery('popular', fetchData);
  return { popular, isError, isLoading };
};
// photosplash
export const useFetchPhotoSplash = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/photo-splash');
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
    const response = await axiosConfig.get('/posts/class/in-focus');
    return response.data.payload;
  };

  const { data: inFocus, isError, isLoading } = useQuery('in-focus', fetchData);
  return { inFocus, isError, isLoading };
};

// article
export const useFetchArticle = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/article');
    return response.data.payload;
  };

  const { data: article, isError, isLoading } = useQuery('article', fetchData);

  return { article, isError, isLoading };
};

// Fantasy
export const useFetchFantasy = () => {
  const fetchData = async () => {
    const response = await axiosConfig.get('/posts/class/fantasy');
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
    const response = await axiosConfig.put(`/polls/${id}`);
    return response.data.payload;
  }

const { mutate: updatePollFn, isLoading : isLoad , isError : isErr, error, isSuccess} = useMutation(updateData);
return { updatePollFn, isLoad , isErr, error, isSuccess };
};

// Like posts
export const useLikePost = () => {
  const likePost = async (id: any) => {
    let response = await axiosConfig.patch(`/posts/like/${id}`);
    response = response.data.payload;
    return response;
  };

  const { mutate: likePostFn, isLoading : isLikeLoading , isError : isLikeError, error, isSuccess} = useMutation(likePost);
  return { likePostFn, isLikeLoading, isLikeError, error, isSuccess };
};

// save posts
export const useSavePost = () => {
  const savePost = async (id: any) => {
    let response = await axiosConfig.patch(`/posts/save/${id}`);
    response = response.data.payload;
    return response;
  };

  const { mutate: savePostFn, isLoading : isSaveLoading , isError : isSaveError, error, isSuccess : isSaveSuccess } = useMutation(savePost);
  return { savePostFn, isSaveLoading, isSaveError, error, isSaveSuccess };
};



// Notification

export const useFetchNotification = () => {
    const fetchData = async () => {
      const response = await axiosConfig.get('/notifications');
      return response.data.payload;
    };
  
    const { data: notification, isError, isLoading, refetch } = useQuery('notifications', fetchData , {
      enabled: true,
    });
  
    return { notification, isError, isLoading , refetch};
  };
  


// Update posts

export const useUpdatePostQuery = (id: string) => {
    const updateData = async (data: any) => {
      let response = await axiosConfig.put(`/posts/${id}`, data);
      console.log(response);
      response = response.data.payload;
    return response;
  };

  const { mutate: updatePostFn,isLoading,isError,error,isSuccess,} = useMutation(updateData);

  return { updatePostFn, isLoading, isError, error, isSuccess };
};

// Delete Post
export const useDeletePostQuery = (id: string) => {
  const deleteData = async () => {
    const response = await axiosConfig.delete(`/posts/${id}`);
    console.log(response);
    return response.data.payload;
  };

  const {mutate: deletePostFn, isError, isLoading, isSuccess : deleteSuccess } = useMutation(deleteData);

  return { deletePostFn, isError, isLoading, deleteSuccess};
};

// Update polls

export const useUpdatePollQuery = (id: string) => {
  const updateData = async (data: any) => {
    let response = await axiosConfig.put(`/polls/${id}`, data);
    console.log(response);
    response = response.data.payload;
  return response;
};

const { mutate: updatePollFn,isLoading,isError,error,isSuccess,} = useMutation(updateData);

return { updatePollFn, isLoading, isError, error, isSuccess };
};

// Delete Poll
export const useDeletePollQuery = (id: string) => {
const deleteData = async () => {
  const response = await axiosConfig.delete(`/polls/${id}`);
  console.log(response);
  return response.data.payload;
};

const {mutate: deletePollFn, isError, isLoading, isSuccess : deleteSuccess } = useMutation(deleteData);

return { deletePollFn, isError, isLoading, deleteSuccess};
};

// Update categories

export const useUpdateCategoryQuery = (id: string) => {
  const updateData = async (data: any) => {
    let response = await axiosConfig.put(`/categories/${id}`, data);
    console.log(response);
    response = response.data.payload;
  return response;
};

const { mutate: updateCategoryFn,isLoading,isError,error,isSuccess,} = useMutation(updateData);

return { updateCategoryFn, isLoading, isError, error, isSuccess };
};

// Delete categories
export const useDeleteCategoryQuery = (id: string) => {
const deleteData = async () => {
  const response = await axiosConfig.delete(`/categories/${id}`);
  console.log(response);
  return response.data.payload;
};

const {mutate: deleteCategoryFn, isError, isLoading, isSuccess : deleteSuccess } = useMutation(deleteData);

return { deleteCategoryFn, isError, isLoading, deleteSuccess};
};




// Update Comment

export const useUpdateCommentQuery = (id: string) => {
  const updateData = async (data: any) => {
    let response = await axiosConfig.put(`/comments/${id}`, data);
    console.log(response);
    response = response.data.payload;
  return response;
};

const { mutate: updateCommentFn,isLoading,isError,error,isSuccess,} = useMutation(updateData);

return { updateCommentFn, isLoading, isError, error, isSuccess };
};

// Delete comment
export const useDeleteCommentQuery = (id: string) => {
const deleteData = async () => {
  const response = await axiosConfig.delete(`/comments/${id}`);
  console.log(response);
  return response.data.payload;
};

const {mutate: deleteCommentFn, isError, isLoading, isSuccess : deleteSuccess } = useMutation(deleteData);

return { deleteCommentFn, isError, isLoading, deleteSuccess};
};