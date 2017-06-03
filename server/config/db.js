const mongoose = require('mongoose')
const mongoDB = 'mongodb://localhost/any-todo'

mongoose.connect(mongoDB)

mongoose.connection.on('connected', ()=>{
	console.log('Mongoose default connection open to '+ mongoDB)
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', ()=> {
  mongoose.connection.close(()=> {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});