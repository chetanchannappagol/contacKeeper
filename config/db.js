const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');
const connectDb = () =>{
    mongoose.connect(db,{
        useNewUrlParser:true,
    })
    .then(()=>{
        console.log('mongoDb connected')
    })
    .catch((e)=>{
        console.log(e);
    })
}

module.exports = connectDb;