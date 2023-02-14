import React, { useState, useEffect } from "react";

const Task = ({ task, completeTask, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);

  useEffect(() => {
    setName(task.name);
  }, [task.name]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask({ ...task, name });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(task.name);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form className="task-edit" onSubmit={handleUpdate}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="save" type="submit">
            Save
          </button>
          <button className="cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span onClick={() => completeTask(task.id)}>{task.name}</span>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
