const Todo = require('../models/todo')

module.exports = {
	getAll : (req, res)=>{
		Todo.find({
			user : req.decoded.id
		})
		.populate('user')
		.then(result=>{
			res.send(result)
		})
		.catch(err=>{
			res.send(err)
		})
	},
	insertTask : (req, res)=>{
		var insert = new Todo({
			task : req.body.task,
			isCompleted : false,
			user : req.decoded.id
		})

		insert.save((err, result)=>{
			if(!err){
				res.send(result)
			}else{
				res.send(err)
			}
		})
	},
	updateIsCompleted : (req, res)=>{
		Todo.findById(req.params.id,(err, result)=>{
			if(err){
				res.send(err)
			}else{
				result.update({
					task : result.task,
					isCompleted : true,
					user : req.decoded.id
				})
				.then(response=>{
					res.send({
						results : response,
						msg : 'You just be updated this task'
					})
				})
				.catch(err=>{
					res.send(err)
				})
			}
		})
	},
	deleteTask : (req, res)=>{
		Todo.deleteOne({_id : req.params.id})
		.then((result)=>{
			res.send({
				result : result,
				msg : `You success delete this task`
			})
		})
		.catch(err=>{
			res.send(err)
		})
	}
}