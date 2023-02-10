import express from 'express' //importing the express.js server framework
import connection from './dbConection.js' //importing the connection function from the dbConnection.js file
import User from './models/user.js' //importing the user schema from the user.js file


//lets create the server first using express.js 

const app = express() //creating the express server

//create a port for the server to listen to
const PORT = 3001

app.use(express.json()) //this is a middleware that allows us to parse the body of the request

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

connection() //calling the connection function from the dbConnection.js file

//lets create the database conection using mongodb
app.post('/create', async (req, res) => { //<---async keyword is used here
    //this is the body of the POST REST API request.
    let body = req.body
    console.log(body)

    // here we are using the user schema to create a new user in the database
    // the await keyword is used to wait for the promise to resolve before continuing the execution of the code
    // when using await, we need to use the async keyword in the function declaration

    // await user.create(body).then(result => {
    //     res.send({ status: 200, message: "User created successfully", data: result })
    // }).catch(err => {
    //     res.send({ status: 500, message: "Error creating user", data: err })
    // })

    const newUser = new User(body)

    newUser.save((err, result) => {
        if (err) {
            res.send({ status: 500, message: "Error creating user", data: err })
        }
        res.send({ status: 200, message: "User created successfully", data: result })

    })


    //lets create the curl request now:

    //     curl - X POST \
    //     http://localhost:3000/users \
    //     -H 'Content-Type: application/json' \
    //     -d '{
    //     "name": "John Doe",
    //         "email": "johndoe@example.com",
    //             "password": "secretpassword"
    // }'



})



//we need to create a new mongo schema, which is a blueprint for the data we want to store in the database
// we need to create a new folder called models, and create a new file called user.js


//where did you get this code above?
//did you try using mongoose?
//offical website
//npm install express
//let install mongoose to interact with mongodb
//npm install mongoose
//Done
// https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/


