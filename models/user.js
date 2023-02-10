import mongoose from "mongoose";


//This is the schema for the user
const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
})


//here we export a default mongoose model, which is a wrapper for the schema, and allows us to interact with the database
export default mongoose.model("User", user)