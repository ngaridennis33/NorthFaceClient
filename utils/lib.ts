import { SessionOptions } from "iron-session";

export interface SessionData {
    access_token?: string;
    logged_in?: boolean;
    refresh_token?: string;
}

export const defaultSession:SessionData = {
    logged_in:false
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "north-face-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
};