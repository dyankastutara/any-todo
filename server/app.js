const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.Promise = require('bluebird')

const users = require('./routes/users')
const todos = require('./routes/todos')

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/api/users', users)
app.use('/api/todos', todos)

app.listen(app.get('port'), () => {
  console.log('You connect with port '+app.get('port'));
})