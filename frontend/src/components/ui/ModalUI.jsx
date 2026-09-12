import Button from "./Button";
import { useEffect } from "react";

const ModalUI = ({ modal, open, onClose }) => {

  useEffect(() => {
    const modalHandleChange = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", modalHandleChange);
    return () => {
      document.removeEventListener("keydown", modalHandleChange);
    };
  }, [onClose]);

  return (
    <>
      {open && (
        <dialog open className={`custom-modal ${modal.className}`}>
          <div className="modal-container">
            <div className="modal-title-block">
              <h2>{modal.mode === "Edit Task" ? "Edit Task" : "Add Task"}</h2>

              <button
                type="button"
                className="modal-close"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            <div className="modal-body-contain">
              {/* 123455 */}
              {modal.content}
            </div>

            <div className="modal-action">
              {modal.children}
              {/* <Button
                btn={{
                  text: modal.mode === "Edit Task" ? "Update Task" : "Add Task",
                }}
              /> */}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ModalUI;

//// Can you check once more of ModalUI.jsx file, what should need to remove
