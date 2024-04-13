import axios from "axios";

const baseUrl = "http://localhost:8000/api"

export const authUrl = {
    register:baseUrl +"/auth"+"/register",
    login:baseUrl +"/auth"+"/login"
}

export const newRequest = axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true,
})