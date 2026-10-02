import { useEffect } from "react";
import Button from "./Button";
import { X } from "lucide-react";

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

              <Button
                btn={{
                  variant: "ghost",
                  className: "modal-close",
                  icon: <X size={16} titleAccess="Close" />,
                }}
                onClick={onClose}
              />
            </div>

            <div className="modal-body-contain">{modal.content}</div>

            <div className="modal-action">{modal.children}</div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ModalUI;
