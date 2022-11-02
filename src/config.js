import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://pilarshop.herokuapp.com/api/"
})