const router = require('express').Router();
const { JobPosting, Tag, Company } = require('../models');

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
  try {
    const jobPostings = await JobPosting.findAll({
        include: [
            {
                model: Tag,
                model: Company,
            }],
        });
    const plainJobPostings = jobPostings.map((data) => data.get({ plain: true }));
    console.log(plainJobPostings)
        res.render('findjobs', { plainJobPostings });
} catch (err) {
    res.status(500).json(err);
    console.log(err);
} 
});

/* router.get('/postjob', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  /* if (req.session.loggedIn){
  res.render('postjob');
  }
  else {
    res.redirect('login')
  } 

  res.render('postjob')

});
 */
 router.get('/jobs', async (req, res) => {
    try {
        const jobPostings = await JobPosting.findAll({
            include: [
                {
                    model: Tag,
                    model: Company,
                }],
            });
        const plainJobPostings = jobPostings.map((data) => data.get({ plain: true }));
        console.log(plainJobPostings)
            res.render('jobs', { plainJobPostings });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    } 
});



router.get('/contactus', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('contactus');
});




module.exports = router;
