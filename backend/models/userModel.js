import mongoose, { now } from "mongoose";
import moment from 'moment-timezone';

const LaosTime = moment.tz(Date.now(), "Asia/Vientiane");
console.log(LaosTime)
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt:{
        type: Date, 
        required: true, 
        default: LaosTime
    },
    updatedAt: {
        type: Date, 
        required: true, 
        default: LaosTime
    },
},
{ timestamps:  true}
);

const User = mongoose.model("User", userSchema)

export default User; 