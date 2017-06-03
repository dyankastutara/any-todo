const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/db')

var TaskSchema = new Schema({
	task : {type : String, required : true},
	isCompleted : {type : Boolean, required : true},
	user : {type : Schema.Types.ObjectId, ref : 'User'}
},{timestamps : true})

var Task = mongoose.model('Task', TaskSchema)
module.exports = Task