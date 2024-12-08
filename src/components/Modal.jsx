import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

function Modal({ children }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={modalRef}
      className="backdrop:bg-stone-900/90 p-4 shadow-sm rounded-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button onClick={() => modalRef.current.close()}>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default forwardRef(Modal);
