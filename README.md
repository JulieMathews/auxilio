
# Auxilio
v2.0

## How to run

1. Create a .env file with the contents `DB_PASSWORD=[your MySQL database password]`
1. Run `npm install` to install the latest server packages.
1. Run `cd client && npm install`the latest client packages.
1. Run `npx sequelize db:create` to create the database if it doesn't already exist.
1. Run `npx sequelize db:migrate` to update the database to the latest schema.
1. Run `npx sequelize db:seed:all` to seed the database with the latest dummy data.
1. Run `npm start` to start the server and run the React frontend.
