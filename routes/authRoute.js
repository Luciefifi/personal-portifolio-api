
import passport from 'passport';
const authRoute = (app) => {
  app.get('/api/auth/google/', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/client',
  passport.authenticate('google', (err) => {
    if (err) {
      console.log('Google authentication error:', err);
      // Handle the error or redirect to an error page
      return res.send('/error');
    }
    console.log('Google authentication successful');
    res.send('google authentication');
  })
);

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
export default authRoute