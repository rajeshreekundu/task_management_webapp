import { Pencil, Trash } from "lucide-react";

import "./task.css";
import Button from "../ui/Button";

const TaskCard = ({
  task,
  onDelete,
  onEdit,
  handleCompleteTask,
  selectedDay,
}) => {
  // Convert task creation time into readable time
  const time = new Date(task.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Check whether 24 hours have passed
  const isExpired = (task) => {
    const diff = Date.now() - task.createdAt;

    return diff > 24 * 60 * 60 * 1000;
  };

  // Decide the current task status
  const getTaskStatus = (task) => {
    if (task.completedDays?.[selectedDay]) {
      return "Done ✅";
    } else if (isExpired(task)) {
      return "Expired ⛔";
    } else {
      return "Pending ⏳";
    }
  };

  // Edit and Delete are disabled after 24 hours
  const isDisabled = (task) => {
    return isExpired(task);
  };

  return (
    <div className={`taskCard ${isDisabled(task) ? "disabled" : ""}`}>
      <div className="taskCard-header">
        <span className="taskCard-category">{task.category}</span>

        <div className="taskCard-actions">
          <Button
            btn={{
              variant: "ghost",
              className: "action-icon",
              icon: (
                <Pencil size={16} strokeWidth={2} titleAccess="Edit Task" />
              ),
            }}
            onClick={() => onEdit(task)}
            disabled={isDisabled(task)}
          />

          <Button
            btn={{
              variant: "ghost",
              className: "action-icon",
              icon: (
                 <Trash size={18} strokeWidth={2} titleAccess="Delete Task" />
              ),
            }}
            onClick={() => onDelete(task.id)}
            disabled={isDisabled(task)}
          />

        </div>
      </div>

      <div className="taskCard-body">
        <div className="taskCard-title-row">
          <input
            type="checkbox"
            className="taskCard-checkbox"
            checked={task.completedDays?.[selectedDay] || false}
            onChange={() => handleCompleteTask(task.id, selectedDay)}
          />

          <h3 className="taskCard-title">{task.title}</h3>
        </div>

        <p className="taskCard-description">{task.note}</p>
      </div>

      <div className="taskCard-footer">
        <div>
          <p>
            Days:{" "}
            {task.days?.length
              ? task.days.map((day) => day.charAt(0)).join(", ")
              : "No days selected"}
          </p>
        </div>

        <p className="task-status">Status: {getTaskStatus(task)}</p>

        <p className="create-time">{time}</p>
      </div>
    </div>
  );
};

export default TaskCard;
