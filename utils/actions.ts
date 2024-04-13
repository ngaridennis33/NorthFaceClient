"use server"

import { defaultSession, SessionData, sessionOptions } from "./lib";
import { redirect } from "next/navigation";
import { authUrl, sessionUrl } from "./network";


export const getSession = async () => {
  try {
    const session = await fetch(sessionUrl.getSession, {
      credentials: 'include' // Include cookies in the request
    });
    if(!session.ok){
      return defaultSession;
    }
      const data = await session.json();
      return data;

  } catch (error) {
    console.error('Error fetching session:', error);
    throw error;
  }
};



export const login = async (prevState:{error:undefined | string}, formData:FormData) => {
    const session = await getSession();
    const formEmail = formData.get("email") as string;
    const formPassword = formData.get("password") as string;

    // Check for the User in the DB
    const response = await fetch(authUrl.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formEmail, password: formPassword }),
      });
  
    // Incase of an error, extract the error message from response body
    if (!response.ok) {
      const errorMessage = await response.text();
      return {error: "Invalid Email and or Password!"}
    }

    // If the response is successful,
      const userData = await response.json();
      

    //   Redirect the user to the Homepage
    // await session.save()
    redirect("/");
}


export const logout = async () => {
  // Delete the session on the client side.
  const session = await getSession();
  session.destroy();

  // Delete on the redis Cache.
  

  // If the response is successful,
      
}