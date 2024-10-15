import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskInput, setEditingTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskInput(tasks[index]);
  };

  const handleSaveEdit = () => {
    const newTasks = [...tasks];
    newTasks[editingTaskIndex] = editingTaskInput;
    setTasks(newTasks);
    setEditingTaskIndex(null);
    setEditingTaskInput('');
  };

  return (
    <div className="task-manager-container">
      <h2>Task Manager</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editingTaskIndex === index ? (
              <div className="editing-task">
                <input
                  type="text"
                  value={editingTaskInput}
                  onChange={(e) => setEditingTaskInput(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingTaskIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div className="task-view">
                <span>{task}</span>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
