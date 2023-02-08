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
    },
    // {
    // user_email: "hsmorfit7@umn.edu",
    // user_password: "SlRt2gSNjlvM",
    // user_firstName: "Hayden",
    // user_lastName: "Smorfit"
    // }, 
    // {
    // user_email: "shartridge8@opensource.org",
    // user_password: "LwcSQ3Htb",
    // user_firstName: "Stacee",
    // user_lastName: "Hartridge"
    // }, 
    // {
    // user_email: "ahirsthouse9@baidu.com",
    // user_password: "ZG7hMo",
    // user_firstName: "Adela",
    // user_lastName: "Hirsthouse"
    // }, 
    // {
    // user_email: "wcorneliusa@tuttocitta.it",
    // user_password: "GNSwHL9p56A4",
    // user_firstName: "Walt",
    // user_lastName: "Cornelius"
    // }, 
    // {
    // user_email: "mbriertonb@npr.org",
    // user_password: "jkoYKpKMwI",
    // user_firstName: "Marnia",
    // user_lastName: "Brierton"
    // }, 
    // {
    // user_email: "wleverentzc@meetup.com",
    // user_password: "S7NVzlGZ",
    // user_firstName: "Winslow",
    // user_lastName: "Leverentz"
    // }, 
    // {
    // user_email: "mmeltetald@printfriendly.com",
    // user_password: "5Xji15",
    // user_firstName: "Min",
    // user_lastName: "Meltetal"
    // }, 
    // {
    // user_email: "dgarioche@ustream.tv",
    // user_password: "PT8nqTWEtS",
    // user_firstName: "Dennie",
    // user_lastName: "Garioch"
    // }, 
    // {
    // user_email: "gkingscottf@bravesites.com",
    // user_password: "2IHjbu2eQrl",
    // user_firstName: "Godfry",
    // user_lastName: "Kingscott"
    // }, 
    // {
    // user_email: "jbrislawng@scientificamerican.com",
    // user_password: "OdUwPf",
    // user_firstName: "Juline",
    // user_lastName: "Brislawn"
    // }, 
    // {
    // user_email: "dalyukinh@illinois.edu",
    // user_password: "g2LAixFr",
    // user_firstName: "Demetria",
    // user_lastName: "Alyukin"
    // }, 
    // {
    // user_email: "skubickii@live.com",
    // user_password: "hIso3hADtds",
    // user_firstName: "Savina",
    // user_lastName: "Kubicki"
    // }, 
    // {
    // user_email: "ncosbeej@g.co",
    // user_password: "ptXDlIvCR3f",
    // user_firstName: "Nonah",
    // user_lastName: "Cosbee"
    // }, 
    // {
    // user_email: "rcrumpk@ameblo.jp",
    // user_password: "49EDg5oZi",
    // user_firstName: "Ringo",
    // user_lastName: "Crump"
    // }, 
    // {
    // user_email: "wfilipl@nbcnews.com",
    // user_password: "H9DvCe",
    // user_firstName: "Walt",
    // user_lastName: "Filip"
    // }, 
    // {
    // user_email: "ogosenellm@oaic.gov.au",
    // user_password: "AHlAOLcG",
    // user_firstName: "Orrin",
    // user_lastName: "Gosenell"
    // }, 
    // {
    // user_email: "rneven@telegraph.co.uk",
    // user_password: "cWj2AoD1J",
    // user_firstName: "Rebeca",
    // user_lastName: "Neve"
    // }, 
    // {
    // user_email: "rflowetho@disqus.com",
    // user_password: "TLmObi3u4",
    // user_firstName: "Rinaldo",
    // user_lastName: "Floweth"
    // }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;