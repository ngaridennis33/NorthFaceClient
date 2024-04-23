"use client"

import { defaultSession, SessionData, sessionOptions } from "./lib";
import { redirect } from "next/navigation";
import { getUserSession, logoutUserSession, registerUser } from "./network";


type RegisterProps ={
  data: Object
}
export const registerNewUser = async ({data}:RegisterProps) => {
  try {
    const response = await registerUser.post("/auth/register", {data});
    return response;
  } catch (error:any) {
    console.log(error.response.data.errorMessage)
  }
};

export const getSession = async () => {
  try {
    const response = await getUserSession.get("/users/me");
    return response;
  } catch (error:any) {
    console.log(error.response.data.errorMessage)
  }
};


export const login = async (prevState:{error:undefined | string}, formData:FormData) => {
    // const session = await getSession();
    // const formEmail = formData.get("email") as string;
    // const formPassword = formData.get("password") as string;

    // // Check for the User in the DB
    // const response = await fetch(authUrl.login, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: formEmail, password: formPassword }),
    //   });
  
    // // Incase of an error, extract the error message from response body
    // if (!response.ok) {
    //   const errorMessage = await response.text();
    //   return {error: "Invalid Email and or Password!"}
    // }

    // // If the response is successful,
    //   const userData = await response.json();
      

    // //   Redirect the user to the Homepage
    // // await session.save()
    // redirect("/");
}


export const logout = async () => {
  // Delete the session.
  try {
    await logoutUserSession.get("/auth/logout");
    console.log("Logged Out")
  } catch (error:any) {
    console.log(error.response.data.errorMessage)
  }
      
}