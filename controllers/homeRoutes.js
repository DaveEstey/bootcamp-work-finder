const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('register');
});

router.get('/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/findjobs', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('findjobs');
});

router.get('/postjob', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  /* if (req.session.loggedIn){
  res.render('postjob');
  }
  else {
    res.redirect('login')
  } */

  res.render('postjob')
  
});

router.get('/jobs', async (req, res) => {
  
  
  res.render('jobs', { jobs })
})




module.exports = router;
