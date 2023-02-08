const { Company } = require('../models');

const companyData = [
    {
    company_na: "Rhyzio",
    company_ema: "ewoodage0@com.com",
    company_pho: "(395) 9036678"
    }, 
    {
    company_nam: "Photospace",
    company_emai: "mhordell1@va.gov",
    company_phon: "(729) 8959180"
    }, 
    {
    company_name: "Meembee",
    company_email: "tmetzel2@slashdot.org",
    company_phone: "(884) 2681896"
    }, 
    {
    company_name: "Thoughtbridge",
    company_email: "jsuccamore3@ow.ly",
    company_phone: "(136) 2975088"
    }, 
    {
    company_name: "Skilith",
    company_email: "pkeer4@google.co.jp",
    company_phone: "(378) 2063348"
    }, 
    {
    company_name: "Oba",
    company_email: "dwalkley5@noaa.gov",
    company_phone: "(741) 6448707"
    }, 
    {
    company_name: "Rhynyx",
    company_email: "vtilston6@ocn.ne.jp",
    company_phone: "(104) 9200491"
    }, 
    {
    company_name: "Riffwire",
    company_email: "aheinrici7@tripod.com",
    company_phone: "(325) 9833346"
    }, 
    {
    company_name: "Cogibox",
    company_email: "echilles8@wp.com",
    company_phone: "(437) 8454561"
    }, 
    {
    company_name: "Quimba",
    company_email: "bbatho9@gnu.org",
    company_phone: "(407) 7749778"
    }, 
    {
    company_name: "Roodel",
    company_email: "oodarea@foxnews.com",
    company_phone: "(140) 8397132"
    }, 
    {
    company_name: "Centimia",
    company_email: "gdenacampb@github.com",
    company_phone: "(323) 7259382"
    }
];

const seedCompanies = () => Company.bulkCreate(companyData);
module.exports = seedCompanies;