import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.trim() === "") return;
    const newTask = { title: task, id: uuidv4() };
    setTasks([...tasks, newTask]);
    setTask("");
  }

  function handleChangeTask(e) {
    setTask(e.target.value);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="task">
      <div className="flex justify-between">
        <h1 className="text-stone-700 md:text-2xl font-bold py-4">Tasks</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={task}
          onChange={handleChangeTask}
          className=" w-64 px-2 py-1 rounded-sm mr-2 bg-stone-200"
          required
        />
        <button
          onClick={handleAddTask}
          className="p-2 text-stone-800 rounded-md hover:text-stone-600"
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-stone-500 py-4">Your tasks will appear here</p>
      ) : (
        <ul className="my-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between hover:bg-stone-100 px-6 rounded-sm py-7"
            >
              <span>{task.title}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="hover:text-stone-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;
