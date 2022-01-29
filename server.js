const express = require('express');
const connectDb = require('./config/db');
const cors = require("cors");

// app.options("*", cors({ origin: 'http://localhost:8000', optionsSuccessStatus: 200 }));


const app = express();

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

//connect Database
connectDb()

//init midleware
app.use(express.json({extended:false}))

app.use('/api/register',require('./Routes/users'));

app.use('/api/auth',require('./Routes/auth'));

app.use('/api/contacts',require('./Routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));