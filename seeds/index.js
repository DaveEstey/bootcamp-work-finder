const seedCompanies = require('./company-seeds');
const seedUsers = require('./clients-seeds');
const seedJobPostings = require('./job-posting-seeds');
const seedTags = require('./tag-seeds');
const seedSkillTags = require('./skill-tag-seeds');
const seedJobTags = require('./job-tag-seeds');
const sequelize = require('../config/connection');
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCompanies();
    console.log('\n----- COMPANIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedJobPostings();
    console.log('\n----- JOB POSTINGS SEEDED -----\n');

    await seedSkillTags();
    console.log('\n----- SKILL TAGS SEEDED -----\n');

    await seedJobTags();
    console.log('\n----- JOB TAGS SEEDED -----\n');
    process.exit(0);
};
seedAll();


