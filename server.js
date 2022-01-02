const express = require('express');
const connectDb = require('./config/db');

const app = express();

//connect Database
connectDb()

//init midleware
app.use(express.json({extended:false}))

app.use('/api/users',require('./Routes/users'));

app.use('/api/auth',require('./Routes/auth'));

app.use('/api/contacts',require('./Routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));