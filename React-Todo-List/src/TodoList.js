// src/TodoList.js
import React, { useState, useCallback, useMemo } from 'react';
import './TodoList.css'; // Import custom CSS file

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = useCallback(() => {
    if (taskInput.trim() === '') return;

    const newTask = {
      id: Date.now(),
      content: taskInput,
      status: 'Todo',
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setTaskInput('');
  }, [taskInput]);

  const handleInputChange = useCallback((e) => {
    setTaskInput(e.target.value);
  }, []);

  const handleStatusChange = useCallback((taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }, []);

  const handleDeleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  const renderedTasks = useMemo(() =>
    tasks.map(task => (
      <div key={task.id} className={`task ${task.status.toLowerCase()}`}>
        <span>{task.content}</span>
        <div>
          {task.status === 'Todo' && (
            <button onClick={() => handleStatusChange(task.id, 'InProgress')}>
              Start Progress
            </button>
          )}
          {task.status === 'InProgress' && (
            <button onClick={() => handleStatusChange(task.id, 'Complete')}>
              Mark Complete
            </button>
          )}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      </div>
    )),
    [tasks, handleStatusChange, handleDeleteTask]
  );

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="tasks-container">
        {renderedTasks}
      </div>
    </div>
  );
};

export default TodoList;
