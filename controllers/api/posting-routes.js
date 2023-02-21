const router = require('express').Router();
const { JobPosting, Tag, JobTag, Company } = require('../../models');

//Route to get all job postings
router.get('/', async (req, res) => {
    try {
        const jobPostings = await JobPosting.findAll({
            include: [
                {
                    model: Tag,
                    model: Company,
                }],
        });
        res.status(200).json(jobPostings);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//Route to get job posting by id
router.get('/:id', async (req, res) => {
    try {
        const jobPosting = await JobPosting.findByPk(req.params.id, {
            include: [
                {
                    model: Company,
                    attributes: ['id', 'company_name'],
                },
                {
                    model: Tag
                }],
        });
        if (!jobPosting) {
            res.status(404).json({ message: 'No job posting found with this id' });
            return;
        }
        res.status(200).json(jobPosting);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//Route to create new job posting
router.post('/', (req, res) => {
    JobPosting.create(req.body)
        .then((jobPosting) => {
            if (req.body.tagIds.length) {
                const jobTagIds = req.body.tagIds.map((tag_id) => {
                    return {
                        posting_id: jobPosting.id,
                        tag_id,
                    };
                });
                return JobTag.bulkCreate(jobTagIds);
            }
            res.status(200).json(jobPosting);
        })
        .then((jobTags) => res.status(200).json(jobTags))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Route to update job posting
router.put('/:id', (req, res) => {
    JobPosting.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((user) => {
            return JobTag.findAll({ where: { posting_id: req.params.id } });
        })
        .then((jobTags) => {
            const jobTagIds = jobTags.map(({ tag_id }) => tag_id);
            const newJobTags = req.body.tagIds
                .filter((tag_id) => !jobTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        posting_id: req.params.id,
                        tag_id,
                    };
                });
            const jobTagsToRemove = jobTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            return Promise.all([
                JobTag.destroy({ where: { id: jobTagsToRemove } }),
                JobTag.bulkCreate(newJobTags),
            ]);
        })
        .then((updatedJobTags) => res.json(updatedJobTags))
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
});

//Route to delete job posting
router.delete('/:id', async (req, res) => {
    try {
        const jobPosting = await JobPosting.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!jobPosting) {
            res.status(404).json({ message: 'No job posting found with this id' });
            return;
        }
        res.status(200).json(jobPosting);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router