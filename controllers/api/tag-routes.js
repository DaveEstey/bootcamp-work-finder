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

// get one tag by its `id` value
router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
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
        if (!tagData) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }
        res.status(200).json(tagData);
        return;
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new tag
router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update a tag by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!tagData[0]) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!tagData) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});
               
module.exports = router;
