import mongoose from "mongoose";


// User Schema is a root.it is a conditional object
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},{timestamps: true,}//it will add createdAt and updatedAt

);

const User = mongoose.model("User", userSchema);//it will create a collection named user in database

export default User;//it will export the User model