"use client"
import axios from "axios"
import { useMutation, useQuery } from "react-query";

const api = process.env.NEXT_PUBLIC_API as string;

const axiosConfig = axios.create({
    baseURL: api,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})

export const usePostQuery = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/posts`)
        return response.data.payload;
    }

    const { data: posts, isError, isLoading } = useQuery("posts", fetchData)

    return { posts, isError, isLoading }
}

export const useFetchEditorsPick = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/posts/class/editors`)
        return response.data.payload;
    }

    const { data: posts, isError, isLoading } = useQuery("editors", fetchData)

    return { posts, isError, isLoading }
}

export const useFetchTrending = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/posts/class/trending`)
        return response.data.payload;
    }

    const { data: trending, isError, isLoading } = useQuery("trending", fetchData)
    return { trending, isError, isLoading }
}

export const useFetchNewsBreaking = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/posts/class/news-breaking`)
        return response.data.payload;
    }

    const { data: newsBreaking, isError, isLoading } = useQuery("news-breaking", fetchData)
    return { newsBreaking, isError, isLoading }
}

export const useFetchFeatured = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/posts/class/featured`)
        return response.data.payload;
    }

    const { data: featured, isError, isLoading } = useQuery("featured", fetchData)
    return { featured, isError, isLoading }
}

export const useCreatePost =  () => {
    const createPost = async (data: any) => {
        let response = await axiosConfig.post("/posts", data)
        response = response.data.payload;
        return response;
    }

    const {mutate : createPostFn , isLoading, isError, error , isSuccess}  = useMutation(createPost)

    return {createPostFn, isLoading, isError, error, isSuccess}
}