"use client"
import axios from "axios"
import { useEffect } from "react";
import { useQuery } from "react-query";

const api = process.env.NEXT_PUBLIC_API as string;

export const useAllUserQuery = () => {
    const fetchData = async () => {
        const response = await axios.get(`${api}/users`)
        return response.data.payload;
    }

    const { data: users, isError, isLoading } = useQuery("users", fetchData)

    return { users, isError, isLoading }
}

export const getUser = () => {
    let user: any;


    user = localStorage.getItem("user")
    user = JSON.parse(user)

    console.log(user)
    if (user) {
        return user;
    }

    return null;
}
