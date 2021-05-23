const mongoose = require('mongoose')

function dbConnection(){
  const URL = process.env['URI']
  console.log("url ")
mongoose.connect(URL ,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
.then(() => console.log("db connected"))
.catch(error => console.log(error.message))
}

module.exports = {dbConnection}
