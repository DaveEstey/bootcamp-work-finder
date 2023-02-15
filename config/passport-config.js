const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const { User } = require('../models')


// set username Field to email
passport.use(new localStrategy({
    usernameField: 'user_email',
    passwordField: 'user_password',
},
    function (user_email, user_password, done) {
        console.log(user_email)
        console.log(user_password)
        User.findOne({ where: { user_email }, raw: true }).then(function (user, err) {
            console.log(user);
            if (err) { return done(err); }

            if (!user) { return done(null, false, { message: 'No user with that email' }); }
            console.log(user_password);





            // check password using bcrypt
            bcrypt.compare(user_password, user.user_password, function (err, res) {
                console.log(res)
                if (err) { return done(err); }
                if (res === false) { return done(null, false, { message: 'password incorrect' }) }
                return done(null, user);
            })
        })
        return
        User.findOne({ where: { user_email } }, function (err, user) {
            console.log(user);
            if (err) { return done(err); }

            if (!user) { return done(null, false, { message: 'No user with that email' }); }
            console.log(user_password);
            console.log(user.password);


            if (!user.verifyPassword(user_password)) { return done(null, false); }

            // check password using bcrypt
            bcrypt.compare(user_password, user.password, function (err, res) {
                console.log(res)
                if (err) { return done(err); }
                if (res === false) { return done(null, false, { message: 'password incorrect' }) }

            })
        });
    }));
// to store a user's information in the session
passport.serializeUser((user, done) => { done(null, user) })
// to retrieve the user's information from the session.
passport.deserializeUser((id, done) => { done(null, id) })



module.exports = passport;

