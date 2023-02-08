const User = require('./User');
const JobPosting = require('./JobPosting');
const Tag = require('./Tag');
const Company = require('./Company');
const SkillTag = require('./SkillTag');

JobPosting.belongsTo(Company, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

Company.hasMany(JobPosting, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

Company.belongsToMany(Tag, {
    through: {
        model: SkillTag
    }
});

Tag.belongsToMany(Company, {
    through: {
        model: SkillTag
    }
});

User.belongsToMany(Tag, {
    through: {
        model: SkillTag
    }
});

Tag.belongsToMany(User, {
    through: {
        model: SkillTag
    }
});

//Export your models so that it can be required in the server.js
// and/or routes files
module.exports = { 
    User,
    JobPosting,
    Tag,
    Company,
    SkillTag
 };
