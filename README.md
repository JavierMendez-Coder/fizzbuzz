<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/javiermendez-coder/fizzbuzz">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">FizzBuzz</h3>

  <p align="center">
    Project refactoring practice
    <br />
    <a href="https://github.com/javiermendez-coder/fizzbuzz"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/javiermendez-coder/fizzbuzz">View Demo</a>
    ·
    <a href="https://github.com/javiermendez-coder/fizzbuzz/issues">Report Bug</a>
    ·
    <a href="https://github.com/javiermendez-coder/fizzbuzz/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#run-app">run-app</a></li>
        <li><a href="#http-requests-examples">HTTP Requests examples</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was designed by [Carlo Gilmar][carlogilmar] to test the abilities to understand and interpret a legacy script in order to refactor it into an Object Oriented script, furthermore, meeting new established requirements are also expected.

In addition, this project was also updated for the creation of a Telegram bot.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [JavaScript](https://www.javascript.com/)
* [Jest](https://jestjs.io/)
* [Express](https://expressjs.com/)
* [ESLint](https://eslint.org/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/javiermendez-coder/fizzbuzz.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This API allows you to access to a "explorers" (basically the way the instructors refer to us) list from the [explorers.json][explorers.json] file. You can access it via browser or API platforms like [Postman][postman].

In case you want to use the Telegram bot you will need to create one on your own talking to the [@BotFather][botfather] in the app, and add the given token to an `.env` file in the root directory.

* .env
  ```
  TOKEN="YOUR-TOKEN-HERE"
  ```

### Run app

* Server
  ```sh
  npm run server
  ```

* Bot for Telegram
  ```sh
  npm run bot
  ```

### HTTP Requests examples

* Obtain the explorers list by mission
  ```
  GET localhost:3000/v1/explorers/:mission
  ```

* Obtain the amount of explorers by mission
  ```
  GET localhost:3000/v1/explorers/amount/:mission
  ```

* Obtain the explorers usernames list by mission
  ```
  GET localhost:3000/v1/explorers/usernames/:mission
  ```

* Obtain the FizzBuzz validation
  ```
  GET localhost:3000/v1/fizzbuzz/:score
  ```

* Obtain the explorers list by stack
  ```
  GET localhost:3000/v1/explorers/stack/:stackName
  ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Legacy code refactoring
  - [x] Creation of Reader, ExplorerService, and FizzbuzzService classes
  - [x] GitHub actions for test automation
  - [x] Use of a linter for code readability
- [x] Creation of an API to expose the functionalities
  - [x] Creation a controller class to connect the functionality with the server
  - [x] Installation of the Express module
- [x] New FizzBuzz endpoint requirement
- [x] Creation of a Telegram bot

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Javier Méndez - javiermendez0299@gmail.com.com

Project Link: [https://github.com/javiermendez-coder/fizzbuzz](https://github.com/javiermendez-coder/fizzbuzz)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Carlo Gilmar][carlogilmar]
* [Launch X][launchx]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/javiermendez-coder/fizzbuzz.svg?style=for-the-badge
[contributors-url]: https://github.com/javiermendez-coder/fizzbuzz/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/javiermendez-coder/fizzbuzz.svg?style=for-the-badge
[forks-url]: https://github.com/javiermendez-coder/fizzbuzz/network/members
[stars-shield]: https://img.shields.io/github/stars/javiermendez-coder/fizzbuzz.svg?style=for-the-badge
[stars-url]: https://github.com/javiermendez-coder/fizzbuzz/stargazers
[issues-shield]: https://img.shields.io/github/issues/javiermendez-coder/fizzbuzz.svg?style=for-the-badge
[issues-url]: https://github.com/javiermendez-coder/fizzbuzz/issues
[carlogilmar]: https://github.com/carlogilmar/
[launchx]: https://github.com/LaunchX-InnovaccionVirtual
[postman]: https://www.postman.com/
[explorers.json]: ./explorers.json
[botfather]: https://t.me/botfather