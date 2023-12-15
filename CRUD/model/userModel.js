36RTimport mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})

export default mongoose.model("user", userSchema)

// skdjbfdj hjdsfmcb smdncb 
// Hi there kaise ho sbhi sb thik hai
// Khushboo hain sb thik hai aur bataon
// Hain sb thik hai
// hn sb thik hain 
// Okay bhai sb thik hain
// hn thik

// Hi there

// Hi there kaise sb thik h
// ok aur btatao
// mera wla thik h
// bas aaj tk
// sb thik hai 
