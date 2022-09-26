const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../Model/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
  });

// GET Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

//New task
router.post('/', async(req, res) => {
  const {title, description} = req.body;
  const task= new Task({title, description});
  await task.save();
  res.json({status: 'Task saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {title, description};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;