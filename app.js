const express = require('express');
const app = express();
let port = 8080;

const patientRouter = require('./routes/patientRoute');

// //Middleware for body parsing
app.use(express.json());

//Routes
app.use('/patients', patientRouter);

//Server listen
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});