import "./ui.css";

const Card = ({task}) => {
  const time = new Date(task.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {/* {check ? ( */}
      <div className={`card`}>
        <div className="card-header">
          <span className="card-category">{task.category}</span>
          <div className="card-actions">
          </div>
        </div>

        <div className="card-body">
          <div className="card-title-row">
            <input
              type="checkbox"
              className="card-checkbox"
              // checked={}
              // onChange={}
            />
            <h3 className="card-title">
              {/* Complete React Project */}
              {task.title}
            </h3>
          </div>
          <p className="card-description">

            {task.note}
          </p>
        </div>

        <div className="card-footer">
          <div>
            <p>
              Days:
            </p>
          </div>
          <p className="task-status"> Status:</p>
          <p className="create-time">{time}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
