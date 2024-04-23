import axios from "axios";

const baseUrl = "http://localhost:8000/api"

export const registerUser = axios.create({
    baseURL: baseUrl,
});

export const loginRequest = axios.create({
    baseURL:baseUrl,
    withCredentials:true,
})


export const getUserSession = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});


export const logoutUserSession = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

