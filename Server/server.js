const express = require('express'); // import express and add to server
const cors = require('cors')

const bodyParser = require('body-parser'); // import body parser 
const connectToMongo = require('./db');

connectToMongo();

const app = express(); 
app.use(express.json());
app.use(cors())

//routes
app.use('/api/auth/' , require('./routes/auth'));
app.use('/api/post' , require('./routes/post'));

// app.get('/' , function(req ,res){ //create routes to navigate in website
//     res.send("Hello World")
// })

app.listen(5000 , function(req , res){ // listen to the port and start server
    console.log("Server running successfully at port 5000");
});