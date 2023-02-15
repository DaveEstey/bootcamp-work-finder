const router = require('express').Router();
const { JobPosting, Tag, Company, User, SkillTag } = require('../models');
const withAuth = require('../config/auth');
const passport = require('../config/passport-config');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('register');
});

router.get('/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.post('/login', passport.authenticate('local'),
  function (req, res) {
    console.log(res)
    res.redirect(200, '/jobs');

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

router.get('/skills/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Tag
        }],
      });
      const excludedTags = userData.tags.map((excluded) => excluded.get(userData.tags.id));
      console.log(excludedTags);
      const excludedArr = [];
      excludedTags.forEach(element => {
        excludedArr.push(element.id);
      });
      const tagData = await Tag.findAll({
        where: {
          id: {
            [Op.not]: excludedArr
          }
        }
      });
    res.status(200).json({userData, tagData});
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
