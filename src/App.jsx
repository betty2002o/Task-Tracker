import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <div className="toDo"> To Do</div>
        <div className="doing"> Doing</div>
        <div className="done"> Done</div>
      </main>
    </div>
  );
}

export default App;
