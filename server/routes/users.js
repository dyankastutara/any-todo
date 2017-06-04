const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const jwtHelpers = require('../helpers/jwtVerify')

router.post('/signin', userController.signin)
router.post('/signup', userController.signup)
router.post('/signfb', userController.signinFacebook)
router.get('/validation', userController.validation)
router.get('/:id', jwtHelpers.verifyToken, userController.getDetail)

module.exports = router