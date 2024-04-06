import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?:string;
    fullName?:string;
    img?:string;
    role?:string;
    isLoggedIn:boolean;
}

export const defaultSession:SessionData={
    isLoggedIn:false
}

// const secretKey = process.env.SECRET_KEY || "default_secret_key";

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "north-face-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
};