import Tasks from "./Tasks.jsx";
export default function SelectedProject({ selectedProject, onDeleteProject, onAddTask, onDeleteTask }) {
  const formattedDate = new Date(selectedProject.dueDate).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => onDeleteProject(selectedProject.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p>{selectedProject.description}</p>
      </header>
      {/* Render tasks */}
      <Tasks  onAddTask={onAddTask} tasks={selectedProject.tasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}
