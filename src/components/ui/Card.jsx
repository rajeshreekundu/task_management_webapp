import "./ui.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Card = ({
  task,
  onDelete,
  onEdit,
  handleCompleteTask,
  selectedDay,
  onToggle,
}) => {
  const [check, setCheck] = useState();
  const time = new Date(task.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });


  //helper function
  const isExpired = (task) => {
    const diff = Date.now() - task.createdAt;
    return diff > 24 * 60 * 60 * 1000;
  };

  const getTaskStatus = (task) => {
    // const now = Date.now();
    // const diff = now - task.createdAt;

    // const hours24 = 24 * 60 * 60 * 1000;

    if (task.completedDays?.[selectedDay]) {
      return "Done ✅";
    } else if (isExpired(task)) {
      return "Expired ⛔";
    } else {
      return "Pending ⏳";
    }
  };
  const isDisabled = (task) => {
    const expired = isExpired(task);
    return expired;
  };
  return (
    <>
      {/* {check ? ( */}
      <div className={`card ${isDisabled(task) ? "disabled" : ""}`}>
        <div className="card-header">
          <span className="card-category">{task.category}</span>
          <div className="card-actions">
            <button
              className="action-icon"
              onClick={() => {
                onEdit(task);
                // console.log(e.target);

                // const btn = e.currentTarget;
                // setTimeout(() => btn.blur(), 0);
              }}
              disabled={isDisabled(task)}
            >
              <EditIcon fontSize="small" titleAccess="Edit Task" />
            </button>
            <button
              className="action-icon"
              onClick={() => {
                onDelete(task.id);
              }}
              disabled={isDisabled(task)}
            >
              <DeleteIcon fontSize="small" titleAccess="Delete Task" />
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="card-title-row">
            <input
              type="checkbox"
              className="card-checkbox"
              checked={task.completedDays?.[selectedDay] || false}
              onChange={() => handleCompleteTask(task.id, selectedDay)}
            />
            <h3 className="card-title">
              {/* Complete React Project */}
              {task.title}
            </h3>
          </div>
          <p className="card-description">
            {/* Finish building the user management dashboard with proper state
            handling. */}
            {task.note}
          </p>
        </div>

        <div className="card-footer">
          <div>
            <p>
              Days:{" "}
              {task.days?.length
                ? task.days.map((day) => day.charAt(0)).join(", ")
                : "No days selected"}
            </p>
          </div>
          <p className="task-status">
            Status: {/* {check ? "Done" : "Not Done"} */}
            {getTaskStatus(task)}
          </p>
          <p className="create-time">{time}</p>
        </div>
      </div>
      {/* ) : (
        <p></p>
      )} */}
    </>
  );
};

export default Card;
