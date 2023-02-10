const User = require('./User');
const JobPosting = require('./JobPosting');
const Tag = require('./Tag');
const Company = require('./Company');
const SkillTag = require('./SkillTag');
const JobTag = require('./JobTag');

JobPosting.belongsTo(Company, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

Company.hasMany(JobPosting, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

JobPosting.belongsToMany(Tag, {
    through: {
        model: JobTag
    }
});

Tag.belongsToMany(JobPosting, {
    through: {
        model: JobTag
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

module.exports = { 
    User,
    JobPosting,
    Tag,
    Company,
    SkillTag,
    JobTag
 };
