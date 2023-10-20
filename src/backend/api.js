const axios = require('axios');

function generateCoverLetter(params) {
  const apiKey = 'your_api_key_here';
  const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  // Define the dynamic prompt with placeholders
  const prompt = `Please write me a cover letter with these constraints: 
The position is a ${params.position}.
My name is ${params.name}.
My skillset is with ${params.languages}.
I am skilled in ${params.frameworks}.
The company is called ${params.company}.
The company address is ${params.address}.
My address is ${params.myAddress}.
My education came from ${params.school} which I attended from ${params.educationYears}.
I also have my ${params.degree} in ${params.field}, which I received from the ${params.school} in ${params.graduationYear}.
My github is ${params.githubLink} and some of my notable projects are ${params.githubProj1}, which is ${params.proj1Status},
${params.githubProj2}, which is ${params.proj2Status}, and ${params.githubProj3}, which is ${params.proj3Status}.
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