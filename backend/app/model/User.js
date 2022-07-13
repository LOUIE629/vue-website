const mongoose = require('mongoose')
const { Schema,model } = mongoose


const UserSchema = new Schema({
    account: { type: String, require: true },
    password: { type: String, require: true },
    province: { type: String, require: true },
    city: { type: String, require: true },
})

const User = model('User', UserSchema)

module.exports = User