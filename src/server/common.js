import { axiosInstance} from "../../lib/axios"

const query = process.env.NEXT_PUBLIC_API_URL_LOCAL;

export const getTodaysQuery = async () => {
    const res = await axiosInstance.get(`${query}/today`)
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error("Failed to fetch today's query")
    }
}

export const getAllTimeQuery = async (pageNo, limit) => {
    const res = await axiosInstance.get(`${query}/all?page=${pageNo}&limit=${limit}`)
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error("Failed to fetch all time query")
    }
}