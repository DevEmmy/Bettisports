"use client"
import axios from "axios"
import { useQuery } from "react-query";

const api = process.env.NEXT_PUBLIC_API as string;

export const usePostQuery = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts`)
        return response.data.payload;
    }

    const {data: posts, isError, isLoading} = useQuery("posts", fetchData)

    return {posts, isError, isLoading}
}

// editors
export const useFetchEditorsPick = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/editors`)
        return response.data.payload;
    }

    const {data: posts, isError, isLoading} = useQuery("editors", fetchData)

    return {posts, isError, isLoading}
}

// Trending
export const useFetchTrending = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/trending`)
        return response.data.payload;
    }

    const {data: trending, isError, isLoading} = useQuery("trending", fetchData)
    return {trending, isError, isLoading}
}

// News Breaking
export const useFetchNewsBreaking = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/news-breaking`)
        return response.data.payload;
    }

    const {data: newsBreaking, isError, isLoading} = useQuery("news-breaking", fetchData)
    return {newsBreaking, isError, isLoading}
}


// Featured
export const useFetchFeatured = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/featured`)
        return response.data.payload;
    }

    const {data: featured, isError, isLoading} = useQuery("featured", fetchData)
    return {featured, isError, isLoading}
}


// stories
export const useFetchStories = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/stories`)
        return response.data.payload;
    }

    const {data: stories, isError, isLoading} = useQuery("stories", fetchData)
    return {stories, isError, isLoading}
}

// ForyOU
export const useFetchForYou = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/for-you`)
        return response.data.payload;
    }

    const {data: forYou, isError, isLoading} = useQuery("for-you", fetchData)
    return {forYou, isError, isLoading}
}

// popular
export const useFetchPopular = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/popular`)
        return response.data.payload;
    }

    const {data: popular, isError, isLoading} = useQuery("popular", fetchData)
    return {popular, isError, isLoading}
}

// photosplash
export const useFetchPhotoSplash = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/photo-splash`)
        return response.data.payload;
    }

    const {data: photoSplash, isError, isLoading} = useQuery("photo-splash", fetchData)
    return {photoSplash, isError, isLoading}
}

// Infocus
export const useFetchInFocus = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/in-focus`)
        return response.data.payload;
    }

    const {data: inFocus, isError, isLoading} = useQuery("in-focus", fetchData)
    return {inFocus, isError, isLoading}
}

// article
export const useFetchArticle = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/article`)
        return response.data.payload;
    }

    const {data: article, isError, isLoading} = useQuery("article", fetchData)

    return {article, isError, isLoading}
}