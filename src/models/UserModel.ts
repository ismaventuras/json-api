import { Schema, model } from 'mongoose'

enum Roles {
    ADMIN = "admin",
    USER = "user",
}

interface IUser {
    name: string;
    password: string;
    email: string;
    role: Roles;
    avatar?: string;    
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    password: {type: String, required: true, },
    email: { type: String, required: true, unique: true },
    role: {type: String, enum:Roles},
    avatar: String,
}, {timestamps: true});

const User = model<IUser>('User', userSchema);

export default User
