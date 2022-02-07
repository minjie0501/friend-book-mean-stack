const {Schema, model} = require('mongoose')

const friendSchema = Schema({
    firstName: String,
    lastName: String,
    email:String,
    phone:String,
    bestFriend:Boolean
})

module.exports.Friend = model('Friend', friendSchema)