const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const { User } = require('../models')


// set username Field to email
passport.use(new localStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'No user with that email' }); }

            // check password using bcrypt
            bcrypt.compare(password, user.password, function (err, res) {
                if (err) { return done(err); }
                if (res === false) { return done(null, false, { message: 'password incorrect' }) }
                return done(null, user);
            })
        });
    }));
// to store a user's information in the session
passport.serializeUser((user, done) => { done(null, user) })
// to retrieve the user's information from the session.
passport.deserializeUser((id, done) => { done(null, id) })



module.exports = passport;

