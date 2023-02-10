const { SkillTag } = require('../models');

const skillTagData = [
  {
    user_id: 1,
    tag_id: 1
  },
  {
    user_id: 1,
    tag_id: 2
  },
  {
    user_id: 1,
    tag_id: 3
  },
  {
    user_id: 1,
    tag_id: 4
  },
  {
    user_id: 1,
    tag_id: 5
  },
  {
    user_id: 2,
    tag_id: 2
  },
  {
    user_id: 2,
    tag_id: 5
  },
  {
    user_id: 2,
    tag_id: 14
  },
  {
    user_id: 2,
    tag_id: 15
  },
  {
    user_id: 3,
    tag_id: 1
  },
  {
    user_id: 3,
    tag_id: 2
  },
  {
    user_id: 3,
    tag_id: 4
  },
  {
    user_id: 3,
    tag_id: 16
  },
  {
    user_id: 4,
    tag_id: 13
  },
  {
    user_id: 4,
    tag_id: 14
  },
  {
    user_id: 4,
    tag_id: 15
  },
  {
    user_id: 5,
    tag_id: 3
  },
  {
    user_id: 5,
    tag_id: 4
  },
  {
    user_id: 5,
    tag_id: 5
  },
  {
    user_id: 5,
    tag_id: 6
  },
  {
    user_id: 6,
    tag_id: 1
  },
  {
    user_id: 7,
    tag_id: 1
  },
  {
    user_id: 7,
    tag_id: 2
  },
  {
    user_id: 7,
    tag_id: 3
  },
  {
    user_id: 7,
    tag_id: 8
  },
  {
    user_id: 7,
    tag_id: 12
  }
];

const seedSkillTags = () => SkillTag.bulkCreate(skillTagData);
module.exports = seedSkillTags;
