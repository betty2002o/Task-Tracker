import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    tags: [],
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const isTagSelected = (tagName) => {
    return taskData.tags.some((x) => x === tagName);
  };

  const selectTag = (tagName) => {
    let filterTags = taskData.tags;
    if (filterTags.some((x) => x === tagName)) {
      filterTags = filterTags.filter((x) => x !== tagName);
    } else {
      filterTags = [...filterTags, tagName];
    }
    setTaskData((prev) => {
      return { ...prev, tags: filterTags };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      tags: [],
      status: "todo",
    });
  };

  return (
    <header className="task_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={(e) => handleChange(e)}
        ></input>
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              isTagSelected={isTagSelected("HTML")}
              clickable
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              isTagSelected={isTagSelected("CSS")}
              clickable
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              isTagSelected={isTagSelected("JavaScript")}
              clickable
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              isTagSelected={isTagSelected("React")}
              clickable
            />
          </div>
          <div>
            <select
              name="status"
              className="task_status"
              value={taskData.status}
              onChange={(e) => handleChange(e)}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
