const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/register'

module.exports = app => {
    mongoose.connect(mongoUrl,{ useNewUrlParser:true, useUnifiedTopology:true})

}
