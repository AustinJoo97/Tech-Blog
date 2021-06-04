# Tech Blog ![License](https://img.shields.io/badge/License-ISC-blue.svg)
CMS-style blog app utilizing the MVC paradigm

## Deployed Site Link 

https://austins-first-tech-blog.herokuapp.com/

## Table of Contents

- [Description, Setup, and Installation](#description-setup-and-installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Full License Information](#license-information)
- [Conrtibutors](#contributors)
- [Testing Performed](#testing-performed)
- [Questions](#questions)


## Description, Setup, and Installation
This is a basic tech blog application that is capable of persisting data pertaining to users, posts, comments, and sessions via MySQL database tables and connecting to them using Sequelize. The setup for this application is simple, requiring only the database to first be initialized using the command "mysql -u root -p < <pathname>" then running "node server.js" to spin up the server. Additionally, all the necessary npm packages can be installing using "npm i" and this application should be fully functional. 

The application allows users to create an account then remain logged in via session.store for a minimum of five minutes. During this time, they can access their previous blog post submissions at their dashboard as well as the comments that have been made per post. From the homepage or dashboard (both requiring the user to be logged in with a stored session_id), the user can create and submit new posts and clicking on existing posts at the homepage will allow the user to leave a comment; the commenting feature is restricted to only logged in users.

## Usage
As stated above, this application is a tech blog web application that allows users to share their thoughts, opinions, findings, or anything else to a persistent SQL database that will render these reports to DOM. Users will be able to view posts and comments to the site without having an account but in order to leave comments or submit their own posts, users will be required to make their account; this will additionally grant them access to their dashboard to view their own posts and comments. Finally, logging out will terminate the user's session, logging them out, but their account will continue to exist with their username, email, and a bcrypted password securely stored in a SQL database.


## Technologies Used
- JavaScript
- Node.JS
- Express.JS
- Handlebars JS
- MySQL

NPM
- Sequelize
- dotenv

Other
- Custom API routes 

## License Information
![License](https://img.shields.io/badge/License-ISC-blue.svg)

[License Link](https://opensource.org/licenses/ISC)

## Contributors
- Austin Joo

## Questions
Please contact me with any questions, comments, or concerns regarding this repo or if you would like to be a fellow contributor to this project!
- GitHub: AustinJoo97 
- Email: austinjoo1997@gmail.com
## Demonstration
https://vimeo.com/557405165
