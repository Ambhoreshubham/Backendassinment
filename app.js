
const express = require('express');
const app = express();

// Import task function from tasks.js file
const tasks = require('./tasks');
app.use(express.json());


// GET all tasks
app.get('/tasks', (req, res) => {
  const allTasks = tasks.getAll();
  res.status(200).json(allTasks);
});


// get a specific task by id

app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.getById(taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
});


// create a new task

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const newTask = tasks.create(title, description);
  res.status(201).json(newTask);
});


// update an existing task

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;


  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const updatedTask = tasks.update(taskId, title, description);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(updatedTask);
});

// delete a task by ID

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const deletedTask = tasks.remove(taskId);

  if (!deletedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
});


// start the server

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on: http://localhost:${PORT}`);
});
