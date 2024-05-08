import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status }) => {
  const filteredList = tasks.map((x) => x.status === status);
  console.log("stats", { status }, filteredList);
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      <TaskCard title="Change Delete Icon" tags={["HTML", "CSS"]} />
      <TaskCard title="This is Sample Text" tags={["HTML", "CSS"]} />
      <TaskCard title="This is Sample Text" tags={["HTML", "CSS"]} />
      <TaskCard title="This is Sample Text" tags={["HTML", "CSS"]} />
      <TaskCard title="This is Sample Text" tags={["HTML", "CSS"]} />
    </section>
  );
};

export default TaskColumn;
