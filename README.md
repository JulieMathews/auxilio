
# Auxilio
v2.0

This app is deployed on[heroku](https://limitless-ridge-27812.herokuapp.com/).

Auxilio was created as a tool to build an online community.  

Included in this platform are the following:
- A database that stores articles written by community members
- User authentication to gain access to the community forum and direct messaging.
- A community forum
- Real time direct message option that allows users to have private conversation with fellow community members.

Users can view articles without creating an account. If users want to join the community forum or start a private conversation, they will need to create an account and login.

## How to run (clone the github repository)

1. Create a .env file with the contents `DB_PASSWORD=[your MySQL database password]`
2. Run `npm install` to install the latest server packages.
3. Run `cd client && npm install`the latest client packages.
4. Run `npx sequelize db:create` to create the database if it doesn't already exist.
5. Run `npx sequelize db:migrate` to update the database to the latest schema.
6. Run `npx sequelize db:seed:all` to seed the database with the latest dummy data.
7. Run `npm start` to start the server and run the React frontend.



## Technologies used
- MySQL
- Sequelize
- Sequelize-cli to generate and run migrations for all of our database updates. You can follow the steps above to generate a migration, update a model and move the database forward without discarding all of the existing data.
- Sequelize Session Store to keep session information in the database, so users stay logged in even if the server restarts.
- Express
- Node JS
- PassportJS
- React
- Scaledrone: provides backend services for managing real-time communication.  Auxilio uses an API that runs in the browser.
- Sharp is an image processing package for Node JS.  We used it to resize uploaded profile images to display on the site.
-Multer - an npm package for handling file uploads from a browser.
-bycrpt - to hash password so they can't be extracted from the database
-
