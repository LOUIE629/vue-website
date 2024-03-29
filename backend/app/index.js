const express = require('express')
const bodyParser = require('body-parser')
const mongo = require('./config/db')
const routes = require('./router')
const cors = require('cors')
const app = new express()

mongo(app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
routes(app)

app.listen(3000, () => {
    console.log('server listen at 3000')
})