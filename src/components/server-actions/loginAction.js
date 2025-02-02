'use server'

import { signIn } from "@/app/auth.js"
import { AuthError } from "next-auth"

export async function LoginAction(formData) {
    try {
        const username = formData.username
        const password = formData.password
    
        await signIn("credentials", {
            username,
            password,
            redirectTo :"/"
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin" : return {error : "Invalid Credentials"}
                default : return {error: "unknown error found"}
            }
        }
        throw error
    }

}