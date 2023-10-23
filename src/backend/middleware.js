// const axios = require('axios');
const OpenAI = require('openai')

const  generateCoverLetter = async (params) => {
    // const apiKey = process.env.OPENAI_API_KEY;
    // const model = 'gpt-3.5-turbo'; // Replace with the appropriate model for your use case

    // const prompt = `Please write me a cover letter with these constraints: 
    //     The position is a ${params.position}.
    //     My name is ${params.yourName}.
    //     My phone number is ${params.phone}.
    //     My email is ${params.email}.
    //     My skillset is with ${params.languages}.
    //     I am skilled in ${params.frameworks}.
    //     The company is called ${params.companyName}.
    //     The company address is ${params.companyAddress}.
    //     My address is ${params.yourAddress}.
    //     My education came from ${params.bootcampName} which I attended from ${params.bootcampYears}.
    //     I also have my ${params.degree} in ${params.fieldOfStudy}, which I received from the ${params.schoolName} in ${params.schoolGraduationYear}.
    //     My github is ${params.githubLink} and some of my notable projects are ${params.githubProject1Link}, which is ${params.githubProject1Status},
    //     ${params.githubProject2Link}, which is ${params.githubProject2Status}, and ${params.githubProject3Link}, which is ${params.githubProject3Status}.
    //     The hiring manager's name is ${params.hiringManagerName}.`;

    // try {
    //     const response = await axios.post(`https://api.openai.com/v1/engines/${model}/completions`, {
    //         prompt: prompt,
    //         max_tokens: 1000, // Adjust as needed
    //     }, {
    //         headers: {
    //             'Authorization': `Bearer ${apiKey}`,
    //         },
    //     });

    //     if (response.status === 200) {
    //         return response.data;
    //     } else {
    //         throw new Error(`Failed to generate a cover letter. OpenAI API returned status ${response.status}`);
    //     }
    // } catch (error) {
    //     console.error('Error in generateCoverLetter:', error);
    //     throw error; // Rethrow the error for handling in your Express route
    // }

    // This code is for v4 of the openai package: npmjs.com/package/openai

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": `Please write me a cover letter with these constraints: \n        The position is a ${params.position}.\n        My name is ${params.yourName}.\n        My phone number is ${params.phone}.\n        My email is ${params.email}.\n        My skillset is with ${params.languages}.\n        I am skilled in ${params.frameworks}.\n        The company is called ${params.companyName}.\n        My education came from ${params.bootcampName} which I attended from ${params.bootcampYears}.\n        I also have my ${params.degree} in ${params.fieldOfStudy}, which I received from the ${params.schoolName} in ${params.schoolGraduationYear}.\n        My github is ${params.githubLink} and some of my notable projects are ${params.githubProject1Link}, which is ${params.githubProject1Status},\n        ${params.githubProject2Link}, which is ${params.githubProject2Status}, and ${params.githubProject3Link}, which is ${params.githubProject3Status}.`
    },
    {
      "role": "assistant",
      "content": `Dear Hiring Manager,\n\nI am writing to express my interest in the ${params.position} position at ${params.companyName}. My name is ${params.yourName} and I believe my skillset and experience make me a strong candidate for this role.\n\nI have extensive experience working with ${params.languages} and am skilled in using various ${params.frameworks}. My education includes attending ${params.bootcampName} from ${params.bootcampYears}, where I gained a solid foundation in software development and honed my technical skills. Additionally, I hold a ${params.degree} in ${params.fieldOfStudy} from ${params.schoolName}, which I received in ${params.schoolGraduationYear}.\n\nI am excited about the opportunity to contribute to the innovative work being done at ${params.companyName}. I am particularly impressed with the company's commitment to ${params.companyValues} and their dedication to delivering high-quality solutions.\n\nAs for my projects, I have actively contributed to open-source projects on GitHub. You can find my GitHub profile at ${params.githubLink}. Some of my notable projects include:\n- ${params.githubProject1Link} (${params.githubProject1Status})\n- ${params.githubProject2Link} (${params.githubProject2Status})\n- ${params.githubProject3Link} (${params.githubProject3Status})`
    },
    {
      "role": "user",
      "content": `Please write me a cover letter with these constraints: \n        The position is a ${params.position}.\n        My name is ${params.yourName}.\n        My phone number is ${params.phone}.\n        My email is ${params.email}.\n        My skillset is with ${params.languages}.\n        I am skilled in ${params.frameworks}.\n        The company is called ${params.companyName}.\n        My education came from ${params.bootcampName} which I attended from ${params.bootcampYears}.\n        I also have my ${params.degree} in ${params.fieldOfStudy}, which I received from the ${params.schoolName} in ${params.schoolGraduationYear}.\n        My github is ${params.githubLink} and some of my notable projects are ${params.githubProject1Link}, which is ${params.githubProject1Status},\n        ${params.githubProject2Link}, which is ${params.githubProject2Status}, and ${params.githubProject3Link}, which is ${params.githubProject3Status}.\n        The hiring manager's name is ${params.hiringManagerName}.`
    },
    {
      "role": "assistant",
      "content": `Dear ${params.hiringManagerName},\n\nI am writing to apply for the position of ${params.position} at ${params.companyName}. My name is ${params.yourName}, and I am excited to showcase my skills and qualifications for this opportunity.\n\nI have a strong background in ${params.languages} and am proficient in using various ${params.frameworks}. My education includes attending ${params.bootcampName} from ${params.bootcampYears}, where I gained hands-on experience and a deep understanding of software development. Furthermore, I hold a ${params.degree} in ${params.fieldOfStudy} from ${params.schoolName}, which I completed in ${params.schoolGraduationYear}. My education has provided me with a solid foundation in programming principles and problem-solving.\n\nAs an enthusiastic developer, I have actively contributed to open-source projects on GitHub. You can find my GitHub profile at ${params.githubLink}. Some of my notable projects include:\n\n- ${params.githubProject1Link} (${params.githubProject1Status})\n- ${params.githubProject2Link} (${params.githubProject2Status})\n- ${params.githubProject3Link} (${params.githubProject3Status})\n\nThese projects demonstrate my ability to collaborate with a team, write efficient code, and deliver high-quality solutions.\n\nI am particularly interested in joining ${params.companyName} because of its reputation for innovation and the opportunities for growth within the organization. The company's commitment to ${params.companyValues} aligns perfectly with my own professional values.\n\nI am confident that my combination of education, technical skills, and passion for technology make me a strong fit for this position. I am eager to contribute to the success of your team and look forward to the opportunity to discuss my qualifications further.\n\nThank you for considering my application. I can be reached at ${params.phone} or via email at ${params.email}. I would be thrilled to schedule an interview at your convenience.\n\nSincerely,\n${params.yourName}`
    }
  ],
  temperature: 1,
  max_tokens: 1000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

return response
  
}

module.exports = {generateCoverLetter};