import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="task_form">
      <form>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
        ></input>
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="Javascript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select name="status" className="task_status">
              <option value="option_todo">To Do</option>
              <option value="option_doing">Doing</option>
              <option value="option_done">Done</option>
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
