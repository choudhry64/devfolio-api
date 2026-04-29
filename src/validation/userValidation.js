const {z} = require("zod");

const registerSchema = z.object({
    firstName : z.string() , 
    lastName : z.string(), 
    email : z.string().email(), 
    password : z.string().min(5).max(15), 
    role : z.string(), 
    username : z.string()
})

const loginSchema = z.object({
    email : z.string().email(),
    password : z.string()
})

module.exports = {registerSchema, loginSchema};