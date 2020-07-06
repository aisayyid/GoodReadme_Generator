// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.title}
  ## Description 
  ${answers.description}
  ## Table of Contents:
  *[Installation](##Installation)
  *[Usage][##Usage]
  *[License](##License)
  *[Contributing](##Contributing)
  *[Tests](##Tests)
  *[Questions](##Questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  For any questions, e-mail me at ${answers.email}, or visit my [GitHub] (https://github.com/${answers.github}) 
 

`;
}

module.exports = generateMarkdown;
