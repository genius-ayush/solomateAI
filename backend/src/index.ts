import express from "express" ; 
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cors from 'cors'
import dotenv from 'dotenv' ; 
import jwt from 'jsonwebtoken' ; 
const app = express() ; 
const port = 3000 ; 

app.use(cors()); 

app.use(session({
    secret : 'mysecret' , 
    resave : false , 
    saveUninitialized : true , 
}))

app.use(passport.initialize()) ; 
app.use(passport.session()) ; 
app.get('/' , (req , res)=>{
    res.send("hello world") ; 
})

app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})