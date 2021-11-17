// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  * [Description](#description)
  * [GitHub Information](#github-information)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaborators](#collaborators)
  * [License](#license)
  * [Languages](#languages)
  * [Contributions](#contributions)
  * [Tests](#tests)
  
  ## GitHub Information
  ${data.githubUsername}
  ${data.githubRepolink}
  ${data.emailAddress}

  ## Installation
  ${data.installationRequirements}
  
  ## Usage
  ${data.repoUsage}

  ## Languages
  ${data.programmingLanguages}
  
  ## Contributions
  ${data.projectContributors}

  ## Tests
  ${data.projectTests}
  
  ## License
  ${data.licenseUsage}
`;
}

module.exports = generateMarkdown;
