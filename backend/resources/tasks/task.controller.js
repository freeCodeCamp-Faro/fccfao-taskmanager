const express = require('express');
const router = express.Router();

const Task = require('./task.model');

router.get('/', async (req, res) => {
  // router.get(['/', '/:id'], function(req, res) {
  const task = await Task.find();

  res.status(200).json(task);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);

  res.status(200).json(task);
});

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.patch('/:id', async (req, res) => {
  // Update, force running mongoose validators, and return the updated object
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json(task);
});

router.delete('/:id', async (req, res) => {
  // Update, force running mongoose validators, and return the updated object
  const task = await Task.findByIdAndDelete(req.params.id);
  res.status(204).json(task);
});

module.exports = router;
