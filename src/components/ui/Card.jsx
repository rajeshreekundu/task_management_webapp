import "./ui.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

const Card = ({ task, onDelete, onEdit }) => {
  // const handleClick = (e) => {
  //   e.currentTarget.blur();
  //   taskEdit(task);
  //   console.log(e);
  // };
  const time = new Date(task.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className="card">
        <div className="card-header">
          <span className="card-category">{task.category}</span>
          <div className="card-actions">
            <EditIcon
              fontSize="small"
              titleAccess="Edit Task"
              className="action-icon"
              onClick={() => {
                onEdit(task);
                // console.log(e.target);

                // const btn = e.currentTarget;
                // setTimeout(() => btn.blur(), 0);
              }}
            />

            <DeleteIcon
              fontSize="small"
              titleAccess="Delete Task"
              className="action-icon"
              onClick={()=>{
                onDelete(task.id)
              }}
            />
          </div>
        </div>

        <div className="card-body">
          <div className="card-title-row">
            <input type="checkbox" className="card-checkbox" />
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
          <p className="task-status">Status: </p>
          <p className="create-time">{time}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
