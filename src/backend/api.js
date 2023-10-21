const axios = require('axios');

function generateCoverLetter(params) {

    const apiKey = process.env.OPENAI_API_KEY;
    const model = 'gpt-3.5-turbo'; // Replace with the appropriate model for your use case

    const prompt = `Please write me a cover letter with these constraints: 
        The position is a ${params.position}.
        My name is ${params.yourName}.
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

    return axios
    .post('https://api.openai.com/v1/engines/' + model + '/completions', {
        prompt: prompt,
        max_tokens: 500, // Adjust as needed
    }, {
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        },
    })
    .then((response) => {
        // Handle the response from the OpenAI API
        return response.data
    })
    .catch((error) => {
        // Handle errors
        console.error(error);
    });
  
}

module.exports = generateCoverLetter;