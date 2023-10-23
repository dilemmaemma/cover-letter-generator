const axios = require('axios');

const  generateCoverLetter = async (params) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const model = 'gpt-3.5-turbo'; // Replace with the appropriate model for your use case

    const prompt = `Please write me a cover letter with these constraints: 
        The position is a ${params.position}.
        My name is ${params.yourName}.
        My phone number is ${params.phone}.
        My email is ${params.email}.
        My skillset is with ${params.languages}.
        I am skilled in ${params.frameworks}.
        The company is called ${params.companyName}.
        The company address is ${params.companyAddress}.
        My address is ${params.yourAddress}.
        My education came from ${params.bootcampName} which I attended from ${params.bootcampYears}.
        I also have my ${params.degree} in ${params.fieldOfStudy}, which I received from the ${params.schoolName} in ${params.schoolGraduationYear}.
        My github is ${params.githubLink} and some of my notable projects are ${params.githubProject1Link}, which is ${params.githubProject1Status},
        ${params.githubProject2Link}, which is ${params.githubProject2Status}, and ${params.githubProject3Link}, which is ${params.githubProject3Status}.
        The hiring manager's name is ${params.hiringManagerName}.`;

    try {
        const response = await axios.post(`https://api.openai.com/v1/engines/${model}/completions`, {
            prompt: prompt,
            max_tokens: 1000, // Adjust as needed
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to generate a cover letter. OpenAI API returned status ${response.status}`);
        }
    } catch (error) {
        console.error('Error in generateCoverLetter:', error);
        throw error; // Rethrow the error for handling in your Express route
    }
  
}

module.exports = {generateCoverLetter};