export default function NewTask({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length === 0 && (
        <p className="mt-8">This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.taskContent}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.taskId)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
