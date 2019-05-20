const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');

const catchAsync = fn => {
  return function(req, res, next) {
    // next will be called with the catched error
    return fn(req, res, next).catch(next);
  };
};

router
  .route('/')
  .get(catchAsync(taskController.getAllTasks))
  .post(catchAsync(taskController.createTask));

router
  .route('/:id')
  .get(catchAsync(taskController.getTask))
  .patch(catchAsync(taskController.updateTask))
  .delete(catchAsync(taskController.deleteTask));

module.exports = router;
