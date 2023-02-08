const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'HTML',
  },
  {
    tag_name: 'CSS',
  },
  {
    tag_name: 'JavaScript',
  },
  {
    tag_name: 'React',
  },
  {
    tag_name: 'Web APIs'
  },
  {
    tag_name: 'Third Party APIs'
  },
  {
    tag_name: 'Server-Side APIs'
  },
  {
    tag_name: 'Node.js'
  },
  {
    tag_name: 'Object-Oriented Programming'
  },
  {
    tag_name: 'Express'
  },
  {
    tag_name: 'SQL'
  },
  {
    tag_name: 'Object Relational Mapping'
  },
  {
    tag_name: 'Model-View-Controller'
  },
  {
    tag_name: 'NoSQL'
  },
  {
    tag_name: 'Progressive Web App'
  },
  {
    tag_name: 'React'
  },
  {
    tag_name: 'MERN Stack'
  },
  {
    tag_name: 'State'
  }
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;