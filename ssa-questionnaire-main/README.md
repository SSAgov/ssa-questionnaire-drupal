<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://[Internal Link]/projects/SSAGOVRDSN/repos/ssa-card-replacement/browse">
    <img src="https://beta.ssa.gov/themes/custom/ssa_core/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">SSA Questionnaire</h3>

  <p align="center">
    Application for creating custom questionnaires for SSA.gov
    <br />
    <a href="https://[Internal Link]/display/SSAGOVRDSN/React" target="_blank"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a target="_blank" href="https://beta.ssa.gov/prepare/check-eligibility-for-benefits/questionnaire">View Demo</a>
    <!-- <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<div>
  <h2>Table of Contents</h2>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This project is designed for creating customizable questionnaires that collect user data, analyze it, and provide feedback. The project can be easily extended with additional input types, pages, and other components. The copy/content for this project can come from a Content Management System (CMS), a database, or it can be hardcoded in the application. The application implements a logical flow, and conditionally renders steps based on user answers.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

<!-- * [Next.js](https://nextjs.org/) -->
* [React.js](https://reactjs.org/)
<!-- * [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com) -->

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites

<p>In order to run this project, you would need to have the version of Node 16 and npm 8 installed on your computer. In addition, you would need to have git installed globally. Check with you network administrator with the specifics in regards to installation of external software.</p>
<p>Refer to these pages for installing required software:</p>
<p><a target="_blank" href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Install Git</a></p>
<p><a target="_blank" href="https://nodejs.org/en/download/">Install Node</a></p>

### Installation

1. Navigate to the repo: https://bitbucket.org/aa_061/ssa-questionnaire/src/develop/
2. Create an environmental variables file(s) at root level. This can be accomplished by copying .envexample file that is commited in the repo and adding needed modifications. For development environment, you would need .env.development file, and for the production environment, you would need to create a .end.production file.
3. Within .env file, you would need to specify an application that you are trying to start. At the time of writing, there are two applications: eligibility and replacement. Set the VITE_APP variable equal to whichever application you are working with at the moment. While in development, the .env.development variables will apply.
4. Clone the repo
   ```
   git clone https://aa_061@bitbucket.org/aa_061/ssa-questionnaire.git
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Start the project. In the terminal run the following command:
   ```
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Building

1. In order to build, first step is making sure that there is a .env.production file present at the root level.
2. Ensure that all the variables within .env.production file are appropriate.
3. Select an application that you are trying to build by specifying the VITE_APP variable: eliibility, replacement, etc.
4. Run NPM build:
   ```
   npm run build
   ```
5. Preview a recent build by running NPM preview:
   ```
   npm run preview
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### End-to-End Integration Testing
This application is using Cypress to run end to end tests. Follow these steps to properly install and configut Cypress on your machine: <a target="_blank" href="https://docs.cypress.io/guides/getting-started/installing-cypress">Install Cypress</a>. Follow these steps for running tests:
1. Run Cypress:
   ```
   npm run e2e
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


### Unit Testing

This application is using Vitest as a unit test runner.
1. Ensure that all the variables within .env.production file are appropriate.
2. Select an application that you are trying to build by specifying the VITE_APP variable: eliibility, replacement, etc.
3. Run unit tests with the following command for a one-time result:
   ```
   npm run test
   ```
4. Run unit tests with the following command in the watch mode::
   ```
   npm run test-watch
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Environmental Variables
This section provides an explanation of environmental variables supported by this application.
1. VITE_USE_HARDCODED_DATA - This environmental variable controls the source of the content for the application. When set to try, some or all content for a specific application will be sourced from a locally saved JS or JSON files. When this value is set to false, the content is being fetched from CMS.
2. VITE_API_QUESTIONS_PATH - Relative endpoint for the questions content. Currently, questions content is stored in Drupal and is served via jsonapi module. Since at the moment of writing, this application is designed to be served within Drupal site, when making request, you would omit the origin and use a relative path instead.
3. VITE_API_ORIGIN - This is the origin of the site. This origin is used to append to other relative endpoints, such as VITE_API_QUESTIONS_PATH, in order to fetch data. This origin is primarily used when the application is hosted outside of Drupal.
4. VITE_GTM_ID - Google Tag Manager ID. This value is used for local development ONLY. GTM ID in production is sourced from Drupal.
5. VITE_APP - The specific application. This variables must always be specified.
6. VITE_DEPLOYMENT_PLATFORM  - This variables determines which platform is being used for deployment. It's currently used to host the applications on Mobile Lab network.



<!-- USAGE EXAMPLES -->
## Usage

Start answering the questions and clicking Next as you progress. Once all the required questions have been answerd, you will be presented with the results page that will summarize the findings based on your answers.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Abdul Aliyev - abdul.aliyev@ssa.gov

Project Link: [https://bitbucket.org/aa_061/ssa-questionnaire](https://bitbucket.org/aa_061/ssa-questionnaire)

<p align="right">(<a href="#top">back to top</a>)</p>
