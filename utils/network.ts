import axios from "axios";
import { headers } from "next/headers";

const baseUrl = "http://localhost:8000/api";

export const loginRequest = async (email: string, password: string) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include", // Setting withCredentials to true
    });

    if (!res.ok) {
      throw new Error("Failed to login");
    }

    return await res.json();
  } catch (error:any) {
    throw new Error(error.message);
  }
};

export const registerUser = axios.create({
    baseURL: baseUrl,
});

// export const loginRequest = axios.create({
//     baseURL:baseUrl,
//     withCredentials:true,
// })


export const getUserSession = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});


export const logoutUserSession = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

