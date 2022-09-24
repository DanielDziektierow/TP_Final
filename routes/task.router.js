const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../Model/task');

// GET all Tasks
router.get('/', async (req, res) => {
  //const tasks = await Task.find();
 // res.json(tasks);
 res.send('Hola')
});

module.exports = router;