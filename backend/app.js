const express = require('express');
const mongoose = require('mongoose');
const tasksRouter = require('./resources/tasks/task.routes');

require('dotenv').config({ path: './.env.local' });

const app = express();
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;

console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB Connection succesful!'))
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

app.use('/tasks', tasksRouter);

app.use((req, res, next) => {
  console.log('Not found');
  return next({ status: 404, message: 'not found' });
});

const listener = app.listen(port, () => {
  console.log('App listining on port ' + listener.address().port);
});
