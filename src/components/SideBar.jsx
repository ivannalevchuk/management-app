import Button from "./Button";
function SideBar({ onShow, projects, onSelect }) {
return (
    <div className="bg-black w-1/3 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
        <h1 className="uppercase mb-8 font-bold md:text-xl">Your projects</h1>
        <Button onClick={onShow}>+ Add Project</Button>
        <ul className="text-white mt-8">
            {projects.map((project) => (
                <li key={project.title} className="flex justify-between my-4">
                    <button onClick = {()=>onSelect(project.id)} className="w-full px-4 py-2 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800 flex justify-between">
                        <span>{project.title}</span>
                        <span>{project.deadline}</span>
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
}

export default SideBar;
