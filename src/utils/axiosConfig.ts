import axios from "axios";
const api = process.env.NEXT_PUBLIC_API as string;

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};



export const axiosConfig = axios.create({
    baseURL: api,
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})
