const axios = require('axios');

function generateCoverLetter(params) {
  const apiKey = 'your_api_key_here';
  const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  // Define the dynamic prompt with placeholders
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

  const data = {
    prompt: prompt,
    max_tokens: 150, // Adjust this as needed
  };

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  return axios
    .post(endpoint, data, { headers })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error calling the GPT-3 API:', error);
      throw error;
    });
}

module.exports = generateCoverLetter;