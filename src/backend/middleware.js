require('dotenv').config()

const nodemailer = require('nodemailer');
const path = require('path');

const  generateCoverLetter = async (params) => {

    const {position, yourName, phone, email, languages, frameworks, companyName, githubLink, githubProject1Link, githubProject1Status, githubProject2Link, githubProject2Status, githubProject3Link, githubProject3Status} = params
    let response

    const myDate = new Date();

    let monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();

    let today = `${month} ${date}, ${year}`;

    if (
        params.degree === 'not applicable' || 
        params.schoolName === 'not applicable' || 
        params.fieldOfStudy === 'not applicable' || 
        params.schoolGraduationYear === 'not applicable'
        ) {
            response = 
                `${yourName} \n
                [Your Address] \n
                [City, State, ZIP Code] \n
                ${phone} \n
                ${email} \n
                ${today} \n
                \n
                ${companyName} \n
                [Company Address] \n
                [City, State, ZIP Code] \n
                \n
                Dear ${params.hiringManagerName !== 'unknown' ? params.hiringManagerName : 'Hiring Manager'}, \n
                \n
                I am writing to express my strong interest in the ${position} position at ${companyName}. As an enthusiastic and highly motivated developer with a strong foundation in ${languages} and proficiency in ${frameworks}, I believe that my skills and experience align perfectly with the requirements of this role.
                \n\n
                I completed my education at ${params.bootcampName}, where I honed my coding abilities and software development expertise. My time at ${params.bootcampName} from ${params.bootcampYears} equipped me with a solid understanding of the principles of web development and programming best practices. This comprehensive education has allowed me to tackle complex challenges with creativity and precision.
                \n\n
                I have a strong passion for coding and have continuously sought opportunities to expand my skill set. My GitHub profile, accessible at ${githubLink}, showcases some of my notable projects:
                \n\n
                1. [Project 1] - ${githubProject1Status} \n
                    - GitHub Link: ${githubProject1Link} \n
                    - Status: ${githubProject1Status}
                \n\n
                2. [Project 2] - ${githubProject2Status} \n
                    - GitHub Link: ${githubProject2Link} \n
                    - Status: ${githubProject2Status}
                \n\n
                3. [Project 3] - ${githubProject3Status} \n
                    - GitHub Link: ${githubProject3Link} \n
                    - Status: ${githubProject3Status}
                \n\n
                These projects reflect my dedication to building practical solutions and my ability to adapt to various programming environments. I am committed to maintaining clean and efficient code, as well as staying updated with the latest industry trends.
                \n\n
                I am excited about the opportunity to contribute my skills and enthusiasm to the talented team at ${companyName}. Your company's commitment to innovation and quality closely aligns with my professional values. I am confident that I can make a positive impact and contribute to your mission.
                \n\n
                Please find my contact information below for your convenience:
                \n\n
                - Phone: ${phone} \n
                - Email: ${email}
                \n\n
                Thank you for considering my application. I look forward to the possibility of discussing how my skills and experiences can benefit ${companyName}. I am available for an interview at your earliest convenience and can be reached at the contact information provided above.
                \n\n
                Sincerely,
                \n\n
                ${yourName}`


        }
    else if (
        params.bootcampName === 'not applicable' || 
        params.bootcampYears === 'not applicable'
        ) {
            response =
                `${yourName} \n
                [Your Address] \n
                [City, State, Zip Code] \n
                ${phone} \n
                ${email} \n
                ${today} \n
                \n
                ${companyName} \n
                [Company Address] \n
                [City, State, Zip Code] \n
                \n
                Dear ${params.hiringManagerName !== 'unknown' ? params.hiringManagerName : 'Hiring Manager'},
                \n\n
                I am writing to express my strong interest in the ${position} position at ${companyName}, as advertised. My educational background, technical skillset, and project experiences align well with the requirements for this role.
                \n\n
                My name is ${yourName}, and I can be reached at ${phone} or via email at ${email}. I hold a ${params.degree} in ${params.fieldOfStudy}, which I received from ${params.schoolName} in ${params.schoolGraduationYear}. During my academic journey, I developed a passion for computer programming and gained proficiency in ${languages}. Additionally, I have honed my skills in ${frameworks}.
                \n\n
                My GitHub portfolio, accessible at ${githubLink}, showcases a range of projects that demonstrate my ability to apply my technical knowledge to real-world scenarios. Notable among them are:
                \n\n
                1. [Project 1] - ${githubProject1Status} \n
                    - GitHub Link: ${githubProject1Link} \n
                    - Status: ${githubProject1Status}
                \n\n
                2. [Project 2] - ${githubProject2Status} \n
                    - GitHub Link: ${githubProject2Link} \n
                    - Status: ${githubProject2Status}
                \n\n
                3. [Project 3] - ${githubProject3Status} \n
                    - GitHub Link: ${githubProject3Link} \n
                    - Status: ${githubProject3Status}
                \n\n
                These projects reflect my ability to [briefly describe what each project accomplished or demonstrated]. I am confident that my experience in developing and managing such projects will be an asset to ${companyName}.
                \n\n
                I am enthusiastic about the opportunity to contribute my skills and expertise to ${companyName} and join a team committed to [mention the company's mission or goals, if known]. Thank you for considering my application. I look forward to the possibility of discussing how my background and experiences can benefit your team.
                \n\n
                Sincerely,
                \n\n
                ${yourName}`


        }
    else if (
        params.degree === 'not applicable' || 
        params.schoolName === 'not applicable' || 
        params.fieldOfStudy === 'not applicable' || 
        params.schoolGraduationYear === 'not applicable' ||
        params.bootcampName === 'not applicable' || 
        params.bootcampYears === 'not applicable'
    ) {
        response = 
            `${yourName} \n
            [Your Address] \n
            [City, State, Zip Code] \n
            ${phone} \n
            ${email} \n
            ${today} \n
            \n
            ${companyName} \n
            [Company Address] \n
            [City, State, Zip Code] \n
            \n
            Dear ${params.hiringManagerName !== 'unknown' ? params.hiringManagerName : 'Hiring Manager'},
            \n\n          
            I am writing to express my strong interest in the ${position} position at ${company}. My name is ${yourName}, and I believe my skills and experiences align well with the requirements of the role.
            \n\n
            My background in ${languages} and proficiency in ${frameworks} have equipped me with the technical expertise necessary to excel in this position. I am confident that my abilities in ${languages} and ${frameworks} will enable me to make a valuable contribution to your team and the projects at ${companyName}.
            \n\n
            I have a strong passion for coding and have demonstrated my capabilities through various projects on my GitHub profile: ${githubLink}. Some of my notable projects include:
            \n\n
            1. [Project 1] - ${githubProject1Status} \n
                - GitHub Link: ${githubProject1Link} \n
                - Status: ${githubProject1Status}
            \n\n
            2. [Project 2] - ${githubProject2Status} \n
                - GitHub Link: ${githubProject2Link} \n
                - Status: ${githubProject2Status}
            \n\n
            3. [Project 3] - ${githubProject3Status} \n
                - GitHub Link: ${githubProject3Link} \n
                - Status: ${githubProject3Status}
            \n\n
            These projects showcase my commitment to producing high-quality code and my ability to deliver results in a timely manner.
            \n\n
            I am excited about the opportunity to join ${companyName} and contribute to its success. I am impressed by the company's [mention something specific about the company, e.g., innovative products, mission, or culture], and I am eager to be a part of your dynamic team.
            \n\n
            Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with the needs of ${companyName}. You can reach me at ${phone} or via email at ${email}.
            \n\n
            Sincerely,
            \n\n
            ${yourName}`

    }
    else {
        response =
            `${yourName} \n
            [Your Address] \n
            [City, State, Zip Code] \n
            ${phone} \n
            ${email} \n
            ${today} \n
            \n
            ${companyName} \n
            [Company Address] \n
            [City, State, Zip Code] \n
            \n
            Dear ${params.hiringManagerName !== 'unknown' ? params.hiringManagerName : 'Hiring Manager'},
            \n\n
            I am writing to express my keen interest in the ${position} role at ${companyName}, as advertised on [Where You Found the Job Listing]. With my strong background in ${languages} and proficiency in ${frameworks}, I am excited about the opportunity to contribute to your dynamic team.
            \n\n
            My name is ${yourName}, and I can be reached at ${phone} or via email at ${email}. I have a ${params.degree} in ${params.fieldOfStudy} from ${params.schoolName}, which I received in ${params.schoolGraduationYear}. Additionally, I honed my skills through ${params.bootcampName}, which I attended from ${params.bootcampYears}.
            \n\n
            My experience has equipped me with a robust skillset in ${languages} and expertise in ${frameworks}, making me well-prepared to tackle the challenges of the ${position} role. I have also contributed to several notable projects, including:
            \n\n
            1. [Project 1] - ${githubProject1Status} \n
                - GitHub Link: ${githubProject1Link} \n
                - Status: ${githubProject1Status}
            \n\n
            2. [Project 2] - ${githubProject2Status} \n
                - GitHub Link: ${githubProject2Link} \n
                - Status: ${githubProject2Status}
            \n\n
            3. [Project 3] - ${githubProject3Status} \n
                - GitHub Link: ${githubProject3Link} \n
                - Status: ${githubProject3Status}
            \n\n
            These projects showcase my ability to develop innovative solutions and collaborate effectively within a team.
            \n\n
            I am particularly excited about ${companyName} [specific aspect of the company or project] and believe my skills align perfectly with the requirements for this role. The prospect of contributing to your organization's success is truly inspiring.
            \n\n
            I am excited about the opportunity to discuss how my skills and experiences align with ${companyName}'s needs. Thank you for considering my application. I am eager to learn more about the team and the opportunities at ${companyName}.
            \n\n
            Sincerely,
            \n\n
            ${yourName}`

    }

    sendEmail({email, position, companyName, response})
  
}

const sendEmail = async (params) => {
    const { email, position, companyName, response } = params;

    try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'automated@dilemmacatcoding.com', // sender address
      to: email, // list of receivers
      subject: `Cover Letter for ${position} at ${companyName}`, // Subject line
      text: response, // plain text body
      html: {
        path: path.resolve(__dirname, "../template/mail.html"),
      }, // html body
    });

    console.log(`Message sent: ${info.messageId}`);
    return `Cover Letter sent to ${email}: ${info.messageId}`;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
}

module.exports = {generateCoverLetter, sendEmail};