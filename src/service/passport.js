import passport from 'passport';
import dotenv from 'dotenv'
import GoogleStrategy from 'passport-google-oauth20'
GoogleStrategy.Strategy
import mongoose from 'mongoose';
import User from '../model/userModel.js'
dotenv.config()

// new GoogleStrategy
passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log(user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(
  new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'https://localhost:5000/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Google Strategy - Verification Started');
      try {
        const existingUser = await User.findOne({googleId: profile.id});

        if (existingUser) {
          return done(null, existingUser);
        }
  
        const user = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.name.familyName + ' ' + profile.name.givenName
        }).save();
  
        console.log('New user created:', user);
        done(null, user);
      } catch (error) {
        console.error('Error during verification:', error);
        done(error, false);
      }
    })
  );

      
     