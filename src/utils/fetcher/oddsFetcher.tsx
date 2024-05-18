import axios from "axios";

let axiosConfig = axios.create({
    baseURL: "https://odds-api1.p.rapidapi.com/odds",
    headers:{
        'X-RapidAPI-Key': 'e45b4bf930msh93ca43733da66a1p1ef100jsn9797e73a46c7',
    'X-RapidAPI-Host': 'odds-api1.p.rapidapi.com'
    }
})

export const fetcher: any = (url: string)=> axiosConfig.get(url).then(res => res.data.response);