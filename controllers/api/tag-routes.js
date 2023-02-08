const router = require('express').Router();
const { Tag, User, JobPosting, JobTag, SkillTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [
                { 
                model: User, 
                attributes: ['id', 'user_firstName'] 
                },
                { 
                model: JobPosting, 
                attributes: ['id', 'job_title'] 
                },
            ],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
