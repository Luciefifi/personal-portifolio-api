// import passport from 'passport';
// import  GoogleStrategy from 'passport-google-oauth2'
// GoogleStrategy.Strategy();


// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://yourdomain:3000/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// passport.serializeUser((done,user) =>{
//     done(null,user)

// })
// passport.deserializeUser((done,user) =>{
//     done(null,user)
// })
