import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleShowForm() {
    setShowForm(true);
  }

  function handleAddProject(project) {
    const newProject = { ...project, id: uuidv4() };
    setProjects([...projects, newProject]);
    setShowForm(false);
    setSelectedProject(newProject);
  }

  function handleCancelProject() {
    setShowForm(false);
  }

  function handleSelectProject(id) {
    const project = projects.find((project) => project.id === id);
    setSelectedProject(project);
    setShowForm (false);
    console.log(project);
  }

  function handleDeleteProject(id){
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
    setSelectedProject(null);
 }

console.log(selectedProject);
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onShow={handleShowForm}
        projects={projects}
        onSelect={handleSelectProject}
      />
      {showForm ? (
        <AddProject onAdd={handleAddProject} onClose= {handleCancelProject} />
      ) : selectedProject ? (
         <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
      ) :
       <NoProject onShow={handleShowForm} />
    }
    </main>
  );
}

export default App;
