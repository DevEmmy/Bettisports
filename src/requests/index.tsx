import axios, { AxiosError } from "axios";
import { LoginDto, SignUp } from "./dto";
import { toastError, toastSuccess } from "@/utils/toast";

const axiosConfig = axios.create({
    baseURL: "https://backend-bettisport.onrender.com"
})

export const login = async (data: LoginDto)=>{
    try{
        let result = await axiosConfig.post("/auth/sign-in", data)
        let payload = result.data.payload;
        if(payload){
            localStorage.setItem("user", JSON.stringify(payload.user))
            localStorage.setItem("token", payload.token)
            toastSuccess("Login Successful");
            return true
        }
        return false
    }
    catch(err: any){
        console.log(err)
        if(err.response){
            return toastError(err.response.data.message)
        }
        return toastError(err.message)
        
    }
}

export const signUp = async (data: SignUp)=>{
    try{
        let result = await axiosConfig.post("/auth/sign-up", data)
        let payload = result.data.payload;
        if(payload){
            localStorage.setItem("user", JSON.stringify(payload.user))
            localStorage.setItem("token", payload.token)
            toastSuccess("Sign Up Successful");
            return true
        }
        return false
    }
    catch(err : any){
        console.log(err);
        if(err.response){
            return toastError(err.response.data.message)
        }
        return toastError(err.message)
    }
}