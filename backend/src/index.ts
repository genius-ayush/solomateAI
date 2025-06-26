import express from "express" ; 
import session from "express-session";
import cors from 'cors'
import dotenv from 'dotenv' ; 
import authRoutes from './routers/auth';
import messageRoutes from './routers/message' ; 
import partnerRoutes from './routers/partner' ; 
import subscriptionRoutes from './routers/subscription' ; 
import userRoutes from './routers/user' ;
import passport from "passport";

dotenv.config() ; 
const app = express() ; 
const port = 5000 ; 

app.use(cors()) ; 
app.use(express.json()) ; 

app.use(session({
    secret : 'mysecret' , 
    resave : false , 
    saveUninitialized : true , 
}))

app.use(passport.initialize());

// app.use(passport.initialize()) ; 
// app.use(passport.session()) ; 

app.use('/auth' , authRoutes) ; 
app.use('/message' , messageRoutes) ; 
app.use('/partner' , partnerRoutes) ;
app.use('/user' , userRoutes) ; 
app.use('subscription' , subscriptionRoutes) ; 

app.get('/' , (req , res)=>{
    res.send("hello world") ; 
})

app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})