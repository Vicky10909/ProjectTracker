import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function NewProject({ onSaveProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const errorModal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // check if any input is empty
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show error modal
      errorModal.current.open();

      return;
    }
    
    // every project will have title, descrption, duDate, id and tasks property
    // each project should store its own tasks
    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      id: Math.random(),
      tasks: [],
    });
  }

  return (
    <>
      <Modal ref={errorModal} modalButton="Close" />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        {/* Can not use ref on a component, so we need to forward ref to input*/}
        <Input label="title" type="text" ref={title} />
        <Input label="description" textarea type="text" ref={description} />
        <Input label="due date" type="date" ref={dueDate} />
      </div>
    </>
  );
}
