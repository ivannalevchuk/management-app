import projectImg from "../assets/no-projects.png";
import Button from "./Button";
function NoProject({ onShow }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={projectImg} alt="No project" className="w-16 h-16 object-contain mx-auto" />
      <p className="text-xl text-stone-500 font-bold my-4">No project selected</p>
      <p className="mt-8">
     <Button onClick = {onShow}>
        Create New Project
     </Button>
      </p>
    </div>
  );
}

export default NoProject;
