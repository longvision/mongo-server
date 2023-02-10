import mongoose from 'mongoose'

import dotenv from 'dotenv' //importing the dotenv package to read the .env file

dotenv.config() //this will read the .env file and add the variables to the process.env object

//this is the url to connect to the database
const URL = process.env.MONGO_URL;


// this is a function that will be called in the server.js
// this function connects to the database using the Mongoose ORM. (which is a wrapper for mongodb to help interacting with the database)
// export will export the connection() function from tthis file


const connection = () => {
    mongoose.connect(URL, err => {
        if (err) {
            console.log("Error connecting to database")
        } else {
            console.log("Connected to database")
        }
    })
}


//this also exports the connection() function, and allow you to name your import whatever you want.
// look at the package.json file. you need to add "type": "module" on the json object, to enable importing using the new ES6 syntax: (import ... from ...)
export default connection