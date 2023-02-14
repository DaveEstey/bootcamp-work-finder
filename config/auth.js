const withAuth = (req, res, next) => {
    // if user is not logged in,  return to the login 
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        // if logged in
        next();
    }
};

module.exports = withAuth;