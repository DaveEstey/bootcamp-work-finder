const { JobPosting } = require('../models');
const jobPostingData = [
      {
        job_title: "SEO Consultant",
        job_description: "Tasks: You’ll spend your time working to gain inbound links to increase traffic, optimize copy and metadata for SEO, create high-impact stories and headlines.",
        salary: 10200,
        skill_tags: 'CSS - HTML - JavaScript - Web APIs',
        company_id: 12
      }, 
      {
        job_title: "WEB Analytics Developer",
        job_description: "Tasks: You’ll collect, measure, and analyze data (like web traffic, acquisition, and conversion) so you can make    sense of how people are using the web (and how to optimize sites based on that data).",
        salary: 100000,
        skill_tags: 'CSS - HTML - JavaScript - REACT - Server-Side APIs',
        company_id: 1
      }, 
      {
        job_title: "Information Architect",
        job_description: "Tasks: Information architect’s main jobs are to create site maps and user flows, define data flows/delivery, and research concept and usability testing.",
        salary: 103000,
        skill_tags: 'SQL - NoSQL - ORM - Object-Oriented Programming',
        company_id: 5
      }, 
      {
        job_title: "UX Designer",
        job_description: "Tasks: If you get into UX design, your job will include developing prototypes, mocking up designs, designing specs, researching and analyzing user experience and behavior to iterate and traction test.",
        salary: 97000,
        skill_tags: 'CSS - HTML - JavaScript - MERN Stack',
        company_id: 6
      }, 
      {
        job_title: "UI Designer",
        job_description: "Tasks: Your work as a UI designer will be to design site interfaces and graphics, do customer analysis, perform design research, and create branding and interactive and animated designs.",
        salary: 92000,
        skill_tags: 'CSS - HTML - JavaScript - MERN Stack',
        company_id: 2
      }, 
      {
        job_title: "Accessibility Specialist",
        job_description: "Tasks: The kind of work you can expect as an accessibility specialist includes evaluating accessibility compliance; working with UX, UI, and product designers; and researching and testing products and services for accessibility.",
        salary: 64000,
        skill_tags: 'CSS - HTML - JavaScript - State',
        company_id: 2
      }, 
      {
        job_title: "Project Manager",
        job_description: "Tasks: As a project manager, you will work with your team to create and maintain projects.",
        salary: 125000,
        skill_tags: 'CSS - HTML - JavaScript - MERN Stack',
        company_id: 7
      }, 
      {
        job_title: "Frameworks Specialist",
        job_description: "Tasks: If you’ve got frameworks down pat, you can use them as a specialist to design, prototype, and write code for web projects.",
        salary: 102000,
        skill_tags: 'Node.js - Express - REACT',
        company_id: 12
      }, 
      {
        job_title: "Full Stack Developer",
        job_description: "Tasks: Covering the full-stack as a developer means building and managing platforms and working across teams to create projects, code projects, and manage databases.",
        salary: 107000,
        skill_tags: 'CSS - HTML - JavaScript - MERN Stack - State - SQL',
        company_id: 9
      }, 
      {
        job_title: "Front End Developer",
        job_description: "Tasks: Front-end development could be right for you if you like the idea of prototyping and building interactive sites, debugging across browsers, and managing user data.",
        salary: 92000,
        skill_tags: 'CSS - HTML - JavaScript',
        company_id: 7
      }
];
const seedJobPostings = () => JobPosting.bulkCreate(jobPostingData);
module.exports = seedJobPostings;