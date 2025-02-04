# kanban-board

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

  A Kanban board application that enables a user to login, authenticates them with JWT, and enables the user to create, edit, manage, and delete tickets on a kanban board.
  
## Table of Contents

* [Description](#description)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Dependencies

  This project relies on the following dependencies:

* **React**: To create the components, logic, and structure of the application
* **React Router**: To handle navigation
* **bcrypt**: for password hashing
* **Express**: to handle server-side logic
* **JSON Web Token**: to handle authentication
* **Dotenv**: to load environment variables
* **Postgres**: for the database
* **Sequelize**: to interact with my database

## Installation

**Prerequisites:**

* Node.js and npm (or yarn) installed.

**Steps:**

1. Clone this repository
2. `cd` into the project folder
3. Install the dependencies by runnning `npm install` in the command line
4. With PostgreSQL installed, run `psql -U[your-postgres-username]` and initiate PostgreSQL, then run `\i server/db/schema.sql;` to create the database and underlying tables
5. Configure the `.env.example` File with the proper information and rename it `.env`
6. `npm run seed` to pre-load the tables with test data
7. `npm run start:dev` to test the  server and client-side of the application locally
8. `npm run build` to build the production environment

## Usage

![kanban-board](./assets/kanban-board_walkthrough.gif)
Deployed via Render here:

### Core Functionality

* A home page that allows a user to login
* A login page that allows a user to enter login information
* A kanban board that allows a user to sort, filter, create, edit, and delete tickets

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/feature`)
5. Open a Pull Request

## License

  This project is licensed under MIT. For more information, see (<https://opensource.org/licenses/MIT>)

## Questions

  **GitHub**: [nolangrossi](https://github.com/nolangrossi)

  If you have any questions, please contact me at: <nolangrossi6@gmail.com>
  