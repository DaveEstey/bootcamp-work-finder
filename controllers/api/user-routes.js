const router = require("express").Router();
const { User, Tag, SkillTag } = require("../../models");

//Get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Tag
                }],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//Get user by id
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Tag
                }],
        });
        if (!userData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//Create user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({

            user_email: req.body.email,
            user_password: req.body.password,
            user_firstName: req.body.fName,
            user_lastName: req.body.lName,
        })

        res.status(200).json(newUser);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    } 
});


/* if (req.body.tagIds.length) {
    const userTagIdsArr = req.body.tagIds.map((tag_id) => {
        return {
            user_id: userData.id,
            tag_id,
        };
    });
    return SkillTag.bulkCreate(userTagIdsArr);
}
 
})
.then((skillTagIds) => res.status(200).json(skillTagIds))
} catch ((err) => {
console.log(err);
res.status(400).json(err);
}); */

//Update User
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((user) => {
            return SkillTag.findAll({ where: { user_id: req.params.id } });
        })
        .then((skillTags) => {
            const skillTagIds = skillTags.map(({ tag_id }) => tag_id);
            const newSkillTags = req.body.tagIds
                .filter((tag_id) => !skillTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        user_id: req.params.id,
                        tag_id,
                    };
                });
            const skillTagsToRemove = skillTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            return Promise.all([
                SkillTag.destroy({ where: { id: skillTagsToRemove } }),
                SkillTag.bulkCreate(newSkillTags),
            ]);
        })
        .then((updatedSkillTags) => res.json(updatedSkillTags))
        .catch((err) => {
            res.status(400).json(err);
        });
});

//Delete user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;