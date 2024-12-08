import { useState, useRef } from "react";
import Modal from "./Modal";

import Input from "./Input";

function AddProject({ onAdd, onClose}) {

  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const deadline = deadlineRef.current.value;
    const project = { title, description, deadline };
    console.log(project);
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      deadline.trim() === ""
    ) {
        modalRef.current.open();
        return;
    }

    onAdd(project);
  }

  return (
    <>
    <Modal ref={modalRef}> 
      <h2 className="text-xl text-stone-500 font-bold my-4">Please fill out all fields</h2>
      </Modal>
    <form className="w-[35em] mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <button className="hover:text-stone-800" type = "button" onClick={onClose}>Cancel</button>
        <button
          type="submit"
          className="bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950 px-6 py-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </menu>
      <Input label="Title" type="text" ref={titleRef} />
      <Input label="Description" isTextArea ref={descriptionRef} />
      <Input label="Deadline" type="date" ref={deadlineRef} />
    </form>
    </>
  );
}

export default AddProject;
