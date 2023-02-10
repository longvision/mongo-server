# Running the mongodb/express.js node server.

0- run `npm install` in the root folder.

1- create a .env file and put the content of the .env.example file there.

2- put the url on the .env file.

3- run the server with `node server.js` command.

4- make an API call using the following command:

````
        curl - X POST \
         http://localhost:3000/create \
         -H 'Content-Type: application/json' \
         -d '{
         "name": "John Doe",
             "email": "johndoe@example.com",
                 "password": "secretpassword"
     }'
  
 ````

## Steps and description of the project:

0. create a new folder called models, and create inside a new file called user.js

1. create a new mongo schema, which is a blueprint for the data we want to store in the database

2. create a dbConnection.js file to connect to the mongodb database.

3. create a node server using express.js framework on the server.js file.

4. install the following dependencies:

express.js: `npm install express`

mongoose: `npm install mongoose`

[reference video](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)
