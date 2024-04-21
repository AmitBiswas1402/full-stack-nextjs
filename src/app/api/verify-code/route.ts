import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(){
    await dbConnect()
    try{

    } catch (error) {
        console.error("Error checking username", error);
    return Response.json(
      {
        success: false,
        message: "Error checking username",
      },
      { status: 500 }
    );
    }
}