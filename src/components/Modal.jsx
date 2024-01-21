import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({modalButton}, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <p>Ooops...</p>
      <p>Did you forget to write something?</p>
      <p>Try Again!</p>
      <form method="dialog" className="mt-4 text-right">
        <button className="text-stone-800 hover:text-stone-950">{modalButton}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
