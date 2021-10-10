const express = require('express'); // import express and add to server
const cors = require('cors')
require('dotenv').config()

const bodyParser = require('body-parser'); // import body parser 
const connectToMongo = require('./db');

connectToMongo();
port = process.env.PORT

const app = express(); 
app.use(express.json());
app.use(cors())

//routes
app.use('/api/auth/' , require('./routes/auth'));
app.use('/api/post' , require('./routes/post'));


app.listen(5000 , function(req , res){ // listen to the port and start server
    console.log(`Server running successfully at port ${port}`);
});