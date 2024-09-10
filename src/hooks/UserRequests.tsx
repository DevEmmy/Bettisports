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
      const fetchUser = () => {
          let userObject = localStorage.getItem("user") as string;0
          userObject = JSON.parse(userObject);
          setUser(userObject);
      };
  
      fetchUser();
  }, []);
  

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
  

  export const useFetchLikeAndSaved = () => {
    const [user, setUser] = useState<any>(null);
  
    // Fetch the user when the component mounts
    useEffect(() => {
      const userObject = JSON.parse(localStorage.getItem("user") as string);
      setUser(userObject);
    }, []);
  
    // Define the function to fetch data
    const fetchData = async () => {
      if (user) {
        const response = await axiosConfig.get(`/auth/likes-and-saved/${user._id}`);
        return response.data.payload;
      }
      return null;
    };
  
    // Use React Query to manage the fetch state
    const { data: likesAndSaved, isError, isLoading } = useQuery(
      ['likes-and-saved', user?._id], // Depend on user ID
      fetchData,
      {
        enabled: !!user, // Only run the query if user is not null
      }
    );
  
    return { likesAndSaved, isError, isLoading };
  };
  


  export const useFetchUserById = (id : string) => {
    const fetchData = async () => {
      const response = await axios.get(`${api}/auth/${id}`);
      return response.data.payload;
    };

    // const user = fetchData.find((user) => user._id === id);
  
    const { data: user, isError, isLoading  } = useQuery(id, fetchData);
  
    return { user, isError, isLoading };
  };