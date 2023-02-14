import React, { useState, useEffect } from "react";
import Task from "./Task";

const TasksList = ({
  tasks,
  setTasks,
  completeTask,
  deleteTask,
  updateTask,
}) => {
  useEffect(() => {
    const taskList = localStorage.getItem("tasks");
    if (taskList) {
      setTasks(JSON.parse(taskList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
