const { JobTag } = require('../models');

const jobTagData = [
  {
    posting_id: 1,
    tag_id: 1
  },
  {
    posting_id: 1,
    tag_id: 2
  },
  {
    posting_id: 1,
    tag_id: 3
  },
  {
    posting_id: 1,
    tag_id: 4
  },
  {
    posting_id: 1,
    tag_id: 5
  },
  {
    posting_id: 2,
    tag_id: 2
  },
  {
    posting_id: 2,
    tag_id: 5
  },
  {
    posting_id: 2,
    tag_id: 14
  },
  {
    posting_id: 2,
    tag_id: 15
  },
  {
    posting_id: 3,
    tag_id: 1
  },
  {
    posting_id: 3,
    tag_id: 2
  },
  {
    posting_id: 3,
    tag_id: 4
  },
  {
    posting_id: 3,
    tag_id: 16
  },
  {
    posting_id: 4,
    tag_id: 13
  },
  {
    posting_id: 4,
    tag_id: 14
  },
  {
    posting_id: 4,
    tag_id: 15
  },
  {
    posting_id: 5,
    tag_id: 3
  },
  {
    posting_id: 5,
    tag_id: 4
  },
  {
    posting_id: 5,
    tag_id: 5
  },
  {
    posting_id: 5,
    tag_id: 6
  },
  {
    posting_id: 6,
    tag_id: 1
  },
  {
    posting_id: 7,
    tag_id: 1
  },
  {
    posting_id: 7,
    tag_id: 2
  },
  {
    posting_id: 7,
    tag_id: 3
  },
  {
    posting_id: 7,
    tag_id: 8
  },
  {
    posting_id: 7,
    tag_id: 12
  }
];

const seedJobTags = () => JobTag.bulkCreate(jobTagData);
module.exports = seedJobTags;