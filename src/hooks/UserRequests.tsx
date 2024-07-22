"use client"
import axios from "axios"
import { axiosConfig } from '@/utils/axiosConfig';
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";

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
        // console.log(userObject)
        setUser(userObject)
    }, []) 

    return user;
}


export const useCreateUser = () => {
    const createUser = async (data: any) => {
      let response = await axiosConfig.post('/auth', data);
      response = response.data.payload;
      return response;
    };
  
    const {
      mutate: createUserFn,
      isLoading,
      isError,
      error,
      isSuccess,
    } = useMutation(createUser);
    return { createUserFn, isLoading, isError, error, isSuccess };
  };

  export const useFetchUsers = () => {
    const fetchData = async () => {
      const response = await axios.get(`${api}/auth`);
      return response.data.payload;
    };
  
    const { data: users, isError, isLoading  } = useQuery('auth', fetchData);
  
    return { users, isError, isLoading };
  };
  