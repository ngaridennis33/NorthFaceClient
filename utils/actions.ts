"use server"

import { getIronSession } from "iron-session";
import { defaultSession, SessionData,sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const getSession = async () => {

    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
};



export const login = async (formData:FormData) => {
    const session = await getSession();
    const formEmail = formData.get("email") as string;
    const formPassword = formData.get("password") as string;

    // Check for the User in the DB
    const response = await fetch("http://localhost:8000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formEmail, password: formPassword }),
      });
  
    // Incase of an error, extract the error message from response body
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Failed to login:', errorMessage);
      return; // or perform any other error handling
    }

    // If the response is successful,
      const userData = await response.json();
      session.fullName=userData.fullName;
      session.userId=userData.userId;
      session.img=userData.img;
      session.role=userData.role;
      session.isLoggedIn=userData.isLoggedIn;

    //   Redirect the user to the Homepage
    await session.save()
    redirect("/");
}


// export const logout = async () => {
//   // Delete the session on the client side.
//   const session = await getSession();
//   session.destroy();

//   // Delete on the redis Cache.
//   const response = await fetch("http://localhost:8000/api/auth/logout", {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: formEmail, password: formPassword }),
//       });
  
//     // Incase of an error, extract the error message from response body
//     if (!response.ok) {
//       const errorMessage = await response.text();
//       console.error('Failed to login:', errorMessage);
//       return; // or perform any other error handling
//     }

//     // If the response is successful,
//       const userData = await response.json();
// }