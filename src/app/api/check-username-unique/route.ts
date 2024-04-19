import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/User"
import {z} from "zod"
import { usernameValidation } from "@/schemas/signUpSchema"

const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request){
    await dbConnect()
    try {
        const {searchParams} = new URL(request.url)
        const queryParams = {
            username: searchParams.get('username')
        }
                
    } catch (error) {
        console.error("Error checking username", error)
        return Response.json(
            {
                success: false,
                message: "Error checking username"
            },
            {status : 500}
        )
    }
}