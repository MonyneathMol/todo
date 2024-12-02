
const mongoose = require('mongoose')

require('dotenv').config()
const URI = process.env.DB_URL;
// console.log(`URL : ${URI}`)
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log('Mongoose successfully started'))
  .catch((e) => console.log('Error found in Mongoose',e))