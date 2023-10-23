const nodemailer = require('nodemailer');
const path = require('path');

const  generateCoverLetter = async (params) => {

    if (
        params.degree === 'not applicable' || 
        params.schoolName === 'not applicable' || 
        params.fieldOfStudy === 'not applicable' || 
        params.schoolGraduationYear === 'not applicable'
        ) {

        }
    else if (
        params.bootcampName === 'not applicable' || 
        params.bootcampYears === 'not applicable'
        ) {

        }
    else {

    }

return response
  
}

module.exports = {generateCoverLetter};