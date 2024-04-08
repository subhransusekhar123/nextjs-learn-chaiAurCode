import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide an username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'please provide an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date

},{ timestamps: true})



const User =mongoose.model.users || mongoose.model("users", userSchema);

export default User ;