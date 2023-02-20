const router = require('express').Router();
const { JobPosting, Tag, Company, User, SkillTag } = require('../models');
const withAuth = require('../config/auth');
const passport = require('../config/passport-config');
const { Op } = require("sequelize");
const session = require('express-session');



router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('register', { logged_in: req.session.logged_in });
});


// router.post('/login', passport.authenticate('local',),
//   function (req, res) {
//     console.log(res)
//     res.redirect(200, '/jobs');

//   });

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/findjobs',
//   failureRedirect: '/'
// }
// ));

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/login');
// }

router.get('/findjobs', withAuth, async (req, res) => {
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
    //console.log(plainJobPostings)

    res.render('findjobs', {
      plainJobPostings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/postjob', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response

  res.render('postjob', { logged_in: req.session.logged_in, });
})


// const errorMessage = 'Incorrect email or password.';
router.get('/login', async (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/findjobs');
    return;
  }
  res.render('login', { messages: req.flash() });
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { user_email: req.body.email } });
    if (!userData) {
     res.status(400).json({ message: 'Invalid username or password' });
    
     return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
     res.status(400).json({ message: 'Invalid username or password' });
    
    return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});


router.get('/jobs', withAuth, async (req, res) => {
  try {
    const jobPostings = await JobPosting.findAll({
      include: [
        {
          model: Tag,
          model: Company,
        }],
    });
    const plainJobPostings = jobPostings.map((data) => data.get({ plain: true }));

    res.render('jobs', {
      plainJobPostings,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/contactus', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('contactus', {
    messages: req.flash(),
    logged_in: req.session.logged_in
  });
});

router.post('/contactus', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response

  req.flash('success', 'Thank you for your message!');
  res.redirect('/contactus');
});


//Gets user and skill tags that the user does not currently have. Used for the skills view
router.get('/skills', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Tag
        }],
    });
    const excludedTags = userData.tags.map((excluded) => excluded.get(userData.tags.id));
    //console.log(excludedTags);
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

    const userInfoData = await User.findByPk(req.session.user_id);

    //Gives 'plain' versions of data to be used with Handlebars.

    const userDataPlain = userInfoData.get({ plain: true })

    const userTagsPlain = userData.tags.map((data) => data.get({ plain: true }));
    console.log("user tags ", userTagsPlain)
    const tagDataPlain = tagData.map((data) => data.get({ plain: true }));

    res.status(200).render('skills', {
      tagDataPlain,
      userDataPlain,
      userTagsPlain,
      logged_in: req.session.logged_in
    });


  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Update a user's skills, used for the skills view.
router.put('/skills', async (req, res) => {
  User.update(req.body, {
    where: {
      id: req.session.user_id,
    },
  })
    .then((user) => {
      return SkillTag.findAll({ where: { user_id: req.session.user_id } });
    })
    .then((skillTags) => {

      const skillTagIds = skillTags.map(({ tag_id }) => tag_id);

      const newSkillTags = req.body.tagIds
        .filter((tag_id) => !skillTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            user_id: req.session.user_id,
            tag_id,
          };
        })
      /* const skillTagsToRemove = req.body.tagIds
        .filter(({ tag_id }) => skillTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            user_id: req.session.user_id,
            tag_id,
          }
        }) */

      //console.log("SKILLS TO REMOVE " , skillTagsToRemove)

      return Promise.all([
        // SkillTag.destroy({ where: { id: skillTagsToRemove } }),
        SkillTag.bulkCreate(newSkillTags),
      ]);
    })
    .then((updatedSkillTags) => res.json(updatedSkillTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.session.user_id
//     },
//     returning: true,
//     plain: true
//   })
//   .then((user) => {
//     return SkillTag.findAll({ where: { user_id: req.session.user_id } });
//   })
//   .then((skillTags) => {
//     const skillTagIds = skillTags.map(({tag_id}) => tag_id);
//     const newSkillTags = req.body.skillTagIds
//     .filter((tag_id) =>!skillTagIds.includes(tag_id))
//     .map((tag_id) => {
//       return {
//         user_id: req.session.user_id,
//         tag_id
//       };
//   });
//   const skillTagsToRemove = skillTagIds
//     .filter(({tag_id}) => !req.body.tagIds.includes(tag_id))
//     .map(({id}) => id);

//     return Promise.all([
//       skillTag.destroy({ where: { id: skillTagsToRemove } }),
//       skillTag.bulkCreate(newSkillTags)
//     ]);
//   })
//   .then((updatedSkillTags) => res.json(updatedSkillTags))
//   .catch((err) => {
//     res.status(500).json(err);
//   });
// });

router.delete('/skills', async (req, res) => {
  console.log("REQ LOG", req.body.id)
  console.log("REQ USER", req.session.user_id)
  try {
    await SkillTag.destroy({ where: { tag_id: req.body.id, user_id: req.session.user_id } })
    res.status(200).json("You have deleted the tag")
  } catch (err) {
    res.status(500).json(err);
  }
});



// search for jobs
router.get('/search', async (req, res) => {
  let { term } = req.query;


  try {
    const jobSearch = await JobPosting.findAll({

      include: [
        {
          model: Tag,
          model: Company,
        }],
      where: {
        job_title: {
          [Op.like]: `%${term}%`
        }
      },
    });
    const plainJobSearch = jobSearch.map((data) => data.get({ plain: true }));
    console.log(plainJobSearch)

    res.render('findjobs', {
      plainJobSearch,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});




// --------------Logout-----------------------//
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;
