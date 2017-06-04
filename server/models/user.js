const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/db')

var UserSchema = new Schema({
	name : {type : String, required : true},
	email : {type : String, match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email'], required : true},
	password : String
},{timestamps : true})

var User = mongoose.model('User', UserSchema)
module.exports = User