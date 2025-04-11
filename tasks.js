// This is our in-memory list of tasks
let taskList = [
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task'
    }
  ];
  
 
  let nextId = 2;
  
  
  // Get all tasks
 
  function getAll() {
    return taskList;
  }
  
  // Get a task by its ID
  
  function getById(id) {
    const taskId = parseInt(id);
  
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskId) {
        return taskList[i];
      }
    }
  
    return null; // Task not found
  }
  
  
  // Create a new task

  function create(title, description) {
    const newTask = {
      id: nextId,
      title: title,
      description: description
    };
  
    taskList.push(newTask);
    nextId++; // Prepare ID for next task
  
    return newTask;
  }
  
  
  // Update an existing task
 
  function update(id, title, description) {
    const taskId = parseInt(id);
  
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskId) {
        taskList[i].title = title;
        taskList[i].description = description;
        return taskList[i];
      }
    }
  
    return null; // Task not found
  }
  
  
  // Delete a task

  function remove(id) {
    const taskId = parseInt(id);
  
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskId) {
        const deletedTask = taskList.splice(i, 1)[0]; // Remove from array
        return deletedTask;
      }
    }
  
    return null; // Task not found
  }
  
  
  // export the functions

  module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
  };
  