const { JobPosting } = require('../models');
const jobPostingData = [
    {
        job_title: "Internal Auditor",
        job_description: "This is a test job posting",
        salary: 77253.81,
        company_id: 12
      }, 
      {
        job_title: "GIS Technical Architect",
        job_description: "This is a test",
        salary: 78346.01,
        company_id: 1
      }, 
      {
        job_title: "Senior Sales Associate",
        job_description: "This is a test",
        salary: 41002.73,
        company_id: 5
      }, 
      {
        job_title: "Registered Nurse",
        job_description: "This is a test",
        salary: 69488.04,
        company_id: 6
      }, 
      {
        job_title: "Assistant Media Planner",
        job_description: "This is a test",
        salary: 86232.11,
        company_id: 2
      }, 
      {
        job_title: "Office Assistant I",
        job_description: "This is a test",
        salary: 36622.91,
        company_id: 2
      }, 
      {
        job_title: "General Manager",
        job_description: "This is a test",
        salary: 63381.97,
        company_id: 7
      }, 
      {
        job_title: "Information Systems Manager",
        job_description: "This is a test",
        salary: 51591.38,
        company_id: 12
      }, 
      {
        job_title: "Electrical Engineer",
        job_description: "This is a test",
        salary: 39399.29,
        company_id: 9
      }, 
      {
        job_title: "Clinical Specialist",
        job_description: "This is a test",
        salary: 44042.53,
        company_id: 7
      }
];
const seedJobPostings = () => JobPosting.bulkCreate(jobPostingData);
module.exports = seedJobPostings;