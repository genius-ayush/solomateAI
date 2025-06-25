import passport from "passport";
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//@ts-ignore
import { PrismaClient } from './generated/prisma'
const clientsecret =  process.env.GOOGLE_CLIENT_SECRET ; 
const clientID = process.env.GOOGLE_CLIENT_ID ; 
const url = process.env.CALLBACK_URL ; 
const prisma = new PrismaClient() ; 

passport.use(new GoogleStrategy({
  clientID: clientID,
  clientSecret: clientsecret,
  callbackURL: url
},
async (_accessToken : any, _refreshToken : any , profile : any, done : any ) => {
  
  try {
    const existingUser = await prisma.user.findUnique({
      where: { googleId: profile.id },
    });

    if (existingUser) return done(null, existingUser);

    const newUser = await prisma.user.create({
      data: {
        googleId: profile.id,
        email: profile.emails?.[0].value || '',
        name: profile.displayName,
      },
    });

    return done(null, newUser);
  } catch (err) {
    return done(err, null);
  }
}
));