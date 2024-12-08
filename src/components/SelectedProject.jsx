import Task from "./Task";

function SelectedProject({ project, onDelete }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }


  return (
    <div className="mt-16 w-[35em]">
      <div className="flex justify-between">
        <h1 className="text-stone-700 md:text-4xl font-bold pb-2">
          {project.title}
        </h1>
        <button className="text-stone-800 hover:text-stone-600" onClick={()=>onDelete(project.id)}>Delete</button>
      </div>
      <p className="text-stone-400">{formatDate(project.deadline)}</p>
      <p className="text-stone-700 py-4 whitespace-pre-wrap">{project.description}</p>
      <hr className="border-2 border-stone-300" />
      <Task />
    </div>
  );
}

export default SelectedProject;
