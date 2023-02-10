1- create a .env file and put the content of the .env.example file there.

2- Put the url on the .env file.

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
