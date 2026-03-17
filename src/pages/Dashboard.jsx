import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import TaskForm from "../components/tasks/TaskForm";
import ModalUI from "../components/ui/ModalUI";
import "./pages.css";
import Card from "../components/ui/card";

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const getTask = localStorage.getItem("tasks");
    return getTask ? JSON.parse(getTask) : [];
  });
  const [openModal, setOpenModal] = useState(false);
  const handleChange = () => {
    setOpenModal(true);
  };

  const handleAddTask = (formData) => {
    const newTask = {
      id: Date.now(),
      ...formData,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setOpenModal(false);
    console.log(tasks);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  // useEffect(() => {

  // },[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="dashboard">
      <MainLayout openDialog={handleChange} tasks={tasks} />
      {/* <h4>length {tasks.length}</h4> */}
      {tasks.length >= 1 ? (
        <div>
          {tasks.map((ele, idx) => {
            return (
              <>
                {/* <div key={idx}>
                <h2>Title: {ele.title}</h2>
                <p>Deatils: {ele.note}</p>
                <p>category: {ele.category}</p>
              </div> */}
                {/* <Card task={ele.title} {ele.note} key={ele.idx}/> */}
              </>
            );
          })}
        </div>
      ) : (
        <p>No data Found</p>
      )}

      <ModalUI
        className="task_modal"
        open={openModal}
        onClose={handleClose}
        mode
        content={<TaskForm onSubmitTask={handleAddTask} />}
      />
    </div>
  );
};

export default Dashboard;
