import axios from "axios";

let axiosConfig = axios.create({
    baseURL: "https://api-football-v1.p.rapidapi.com/v3",
    headers:{
        'X-RapidAPI-Key': 'e45b4bf930msh93ca43733da66a1p1ef100jsn9797e73a46c7',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
})

export const fetcher: any = (url: string)=> axiosConfig.get(url).then(res => res.data.response);