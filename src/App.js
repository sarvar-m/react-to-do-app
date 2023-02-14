import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    setCurrentTask(null);
  };

  return (
    <div className="app">
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        currentTask={currentTask}
      />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
