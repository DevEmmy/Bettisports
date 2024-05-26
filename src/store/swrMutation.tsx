import axios from "axios"

const axiosConfig = axios.create({
    baseURL: "https://"
})

export const mutateData = async (url: string, {args}: {args: any})=>{
    await axiosConfig.post(url, args).then((res) => {return res})
}