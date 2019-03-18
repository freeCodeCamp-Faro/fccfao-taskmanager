const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');

router
  .route('/')
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

// router.get('/', taskController.getAllTasks);
// router.get('/:id', taskController.getTask);
// router.post('/', taskController.createTask);
// router.patch('/:id', taskController.updateTask);
// router.delete('/:id', taskController.deleteTask);

module.exports = router;
