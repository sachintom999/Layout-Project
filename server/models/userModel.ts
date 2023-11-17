import { Document, Schema, model } from "mongoose"

type UserRole = "Seller" | "Buyer" | "Admin"

interface User extends Document {
    first_name: string
    last_name: string
    phone_number: string
    dob: string
    image: string
    role: UserRole
}

const userSchema = new Schema<User>(
    {
        phone_number: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        dob: { type: String, required: true },
        image: { type: String, required: true },
        role: {
            type: String,
            enum: ["Seller", "Buyer", "Admin"],
            required: true,
        },
    },
    { timestamps: true } 
)

const UserModel = model<User>("User", userSchema)

export default UserModel
