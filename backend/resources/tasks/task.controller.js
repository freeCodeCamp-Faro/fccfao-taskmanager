const Task = require('./task.model');

exports.getAllTasks = async (req, res) => {
  // router.get(['/', '/:id'], function(req, res) {
  const task = await Task.find();
  res.status(200).json(task);
};

exports.getTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) return next({ status: 404, message: 'Task not found' });
  res.status(200).json(task);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  // Update, force running mongoose validators, and return the updated object
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) return next({ status: 404, message: 'Task not found' });
  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return next({ status: 404, message: 'Task not found' });
  res.status(204).json(task);
};
