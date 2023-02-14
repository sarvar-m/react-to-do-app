import React, { useState, useRef } from "react";

const TaskForm = ({ addTask, updateTask, currentTask }) => {
  const [value, setValue] = useState(currentTask ? currentTask.name : "");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (currentTask) {
      updateTask({ ...currentTask, name: value });
    } else {
      addTask(value);
    }
    setValue("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">{currentTask ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
