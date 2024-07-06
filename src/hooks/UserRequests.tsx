"use client"
import axios from "axios"
import { useEffect, useState } from "react";
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
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        let userObject = localStorage.getItem("user")
        userObject = JSON.parse(userObject as string)
        console.log(userObject)
        setUser(userObject)
    }, []) 

    return user;
}
