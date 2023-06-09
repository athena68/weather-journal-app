// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

function serverListening() {
    console.log("Server started");
    console.log("Listening http://localhost:" + port);

}

const server = app.listen(port, serverListening);

//GET route
app.get('/getData', getData);

function getData(req, res) {
    res.send(projectData);
    console.log(projectData);
}

//POST route
app.post('/addData', addData);

const data = [];

function addData(req, res) {

    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userFeel: req.body.userFeel
    }
    data.push(projectData);
}
