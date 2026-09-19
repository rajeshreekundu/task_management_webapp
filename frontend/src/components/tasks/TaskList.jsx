import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  taskDelete,
  editTask,
  selectedDay,
  handleCompleteTask,
}) => {
  // Show only tasks for the selected day
  const filteredTasks = tasks.filter((task) => {
    return (
      Array.isArray(task.days) &&
      task.days.includes(selectedDay)
    );
  });

  return (
    <>
      {filteredTasks.length >= 1 ? (
        <div className="tasks-card-list">
          {[...filteredTasks].reverse().map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={taskDelete}
              onEdit={editTask}
              handleCompleteTask={handleCompleteTask}
              selectedDay={selectedDay}
            />
          ))}
        </div>
      ) : (
        <div>No Task Found</div>
      )}
    </>
  );
};

export default TaskList;