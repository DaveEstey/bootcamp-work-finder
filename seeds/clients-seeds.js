const { User } = require('../models');

const userData = [

    {
    user_email: "cfanthome0@infoseek.co.jp",
    user_password: "kPf3IHJ58iN",
    user_firstName: "Charmine",
    user_lastName: "Fanthome"
    }, 
    {
    user_email: "kscudder1@cafepress.com",
    user_password: "LJ5IvQLWKoJe",
    user_firstName: "Karole",
    user_lastName: "Scudder"
    }, 
    {
    user_email: "mlindborg2@npr.org",
    user_password: "ClgPxr2oG",
    user_firstName: "Meyer",
    user_lastName: "Lindborg"
    }, 
    {
    user_email: "hshirley3@harvard.edu",
    user_password: "97DalrCW",
    user_firstName: "Hermon",
    user_lastName: "Shirley"
    }, 
    {
    user_email: "sscinelli4@instagram.com",
    user_password: "asaOe2Z",
    user_firstName: "Skippy",
    user_lastName: "Scinelli"
    }, 
    {
    user_email: "btrathan5@businesswire.com",
    user_password: "AbbSz7plXIB",
    user_firstName: "Barrie",
    user_lastName: "Trathan"
    }, 
    {
    user_email: "egreen6@wired.com",
    user_password: "0JADhBu2QB",
    user_firstName: "Emerson",
    user_lastName: "Green"
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;