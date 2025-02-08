import React, { useState } from 'react';
import './index.css'; // Import the CSS file

// TodoItem component
function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
}

// TodoList component
function TodoList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => onDeleteTask(index)} />
      ))}
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1 className="header">ToDo List App</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="input-field"
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask} className="add-btn">Add Task</button>
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
