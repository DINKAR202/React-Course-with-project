"use server"
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { defaultSession, sesssionOptions } from "./lib";


export const getSession = async()=> {
    const session = await getIronSession(cookies(), sesssionOptions)
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}