import NewTask from "./NewTask.jsx";
import { useState } from "react";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  function handleAddTaskClick() {
    onAddTask(taskInput);
    setTaskInput("");
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={taskInput}
          onChange={handleChange}
        />
        <button
          className="text-stone-600 hover:text-stone-950"
          onClick={handleAddTaskClick}
        >
          Add Task
        </button>
      </div>
      <NewTask tasks={tasks} onDelete={onDeleteTask} />
    </div>
  );
}
