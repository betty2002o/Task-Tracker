import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(" tasks", tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To Do" icon={todoIcon} status="todo" tasks={tasks} />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          status="doing"
          tasks={tasks}
        />
        <TaskColumn title="Done" icon={doneIcon} status="done" tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
