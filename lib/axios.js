import axios from "axios";

export const axiosInstance = axios.create({
    baseURl: process.env.NEXT_PUBLIC_API_URL,
})
