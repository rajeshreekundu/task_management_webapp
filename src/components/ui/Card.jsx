import "./ui.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <span className="card-category">Work</span>
          <div className="card-actions">
            <EditIcon
              fontSize="small"
              titleAccess="Edit Task"
              className="action-icon"
            />

            <DeleteIcon
              fontSize="small"
              titleAccess="Delete Task"
              className="action-icon"
            />
          </div>
        </div>

        <div className="card-body">
          <div className="card-title-row">
            <input type="checkbox" className="card-checkbox" />
            <h3 className="card-title">Complete React Project</h3>
          </div>
          <p className="card-description">
            Finish building the user management dashboard with proper state
            handling.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
