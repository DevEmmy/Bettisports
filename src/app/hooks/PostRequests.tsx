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


