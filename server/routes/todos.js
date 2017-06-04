const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const jwtHelpers = require('../helpers/jwtVerify')

router.get('/', jwtHelpers.verifyToken, todoController.getAll)
router.post('/', jwtHelpers.verifyToken, todoController.insertTask)
router.patch('/:id', jwtHelpers.verifyToken, todoController.updateIsCompleted)
router.delete('/:id', jwtHelpers.verifyToken, todoController.deleteTask)

module.exports = router