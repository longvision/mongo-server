import express from 'express' //importing the express.js server framework
import connection from './dbConection.js' //importing the connection function from the dbConnection.js file
import User from './models/user.js' //importing the user schema from the user.js file
import dotenv from 'dotenv' //importing the dotenv package to read the .env file

dotenv.config() //this will read the .env file and add the variables to the process.env object

//lets create the server first using express.js 
const URL = process.env.MONGO_URL;

const app = express() //creating the express server


const PORT = 3001 //create a port for the server to listen to

app.use(express.json()) //this is a middleware that allows us to parse the body of the request

app.listen(PORT, () => { //server listens on defined port (3001) 
    console.log(`Server is running on port ${PORT}`)
})

connection(URL) //calling the connection function from the dbConnection.js file


app.post('/create', async (req, res) => { //<---async keyword is used here.
    //this is the body of the POST REST API request.
    let body = req.body
    
    console.log(body)

    // here we are using the user schema to create a new user in the database
    // the await keyword is used to wait for the promise to resolve before continuing the execution of the code
    // when using await, we need to use the async keyword in the function declaration

    // await user.create(body).then(result => { //<---await keyword is used here to process the async call.
    //     res.send({ status: 200, message: "User created successfully", data: result })
    // }).catch(err => {
    //     res.send({ status: 500, message: "Error creating user", data: err })
    // })
    
    //create the user mongoose object in the defined schema format.
    const newUser = new User(body)
    
    //saving the user created and sending the response to the client.
    newUser.save((err, result) => {
        if (err) {
            res.send({ status: 500, message: "Error creating user", data: err })
        }
        res.send({ status: 200, message: "User created successfully", data: result })

    })

})





