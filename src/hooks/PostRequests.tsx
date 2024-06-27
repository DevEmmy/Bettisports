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

export const useFetchEditorsPick = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/editors`)
        return response.data.payload;
    }

    const {data: posts, isError, isLoading} = useQuery("editors", fetchData)

    return {posts, isError, isLoading}
}

export const useFetchTrending = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/trending`)
        return response.data.payload;
    }

    const {data: trending, isError, isLoading} = useQuery("trending", fetchData)
    return {trending, isError, isLoading}
}

export const useFetchNewsBreaking = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/news-breaking`)
        return response.data.payload;
    }

    const {data: newsBreaking, isError, isLoading} = useQuery("news-breaking", fetchData)
    return {newsBreaking, isError, isLoading}
}

export const useFetchFeatured = ()=>{
    const fetchData = async ()=>{
        const response = await axios.get(`${api}/posts/class/featured`)
        return response.data.payload;
    }

    const {data: featured, isError, isLoading} = useQuery("featured", fetchData)
    return {featured, isError, isLoading}
}