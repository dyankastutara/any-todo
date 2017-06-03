const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
	signup : (req, res)=>{
		User.findOne({
			email : req.body.email
		})
		.then(query=>{
			console.log(query)
			if(!query){
				var insertUser = User({
					name : req.body.name,
					email : req.body.email,
					password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(Number(process.env.SALT)))
				})

				insertUser.save((error, response)=>{
					if(!error){
						res.send(response)						
					}else{
						res.send(error)
					}
				})
			}else{
				res.send({msg : 'This email is already registered'})
			}
		})
		.catch(error=>{
			res.send(error)
		})
	},
	signin : (req, res)=>{
		User.findOne({
			email : req.body.email
		})
		.then(result=>{
			if(result){
				var token = jwt.sign({
					id : result._id,
					name : result.name,
					email : result.email
				}, process.env.JWT_SECRET, {expiresIn : '1h'})
				res.send({
					token : token
				})
			}else{
				res.send({msg : 'Email or password is wrong!'})
			}
		})
		.catch(err=>{
			res.send(err)
		})
	},
	getDetail : (req, res)=>{
		User.findById(req.params.id)
		.then(result=>{
			res.send(result)
		})
		.catch(err=>{
			res.send(err)
		})
	}
}