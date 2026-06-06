import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import TaskForm from "../components/tasks/TaskForm";
import ModalUI from "../components/ui/ModalUI";
import "./pages.css";
import { useTask } from "../contexts/TaskContext";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [mode, setMode] = useState("add");
  const { tasks, setTasks, addTask, deleteTask} = useTask();
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   try {
  //     const parsed = JSON.parse(savedTasks);
  //     return Array.isArray(parsed) ? parsed : [];
  //   } catch {
  //     return [];
  //   }
  // });

  const [value, setValue] = useState(new Date());
  const today = new Date().toLocaleString("en-US", { weekday: "long" }); // [output e.g --- Monday]
  const [selectedDay, setSelectedDay] = useState(today);

  const onChange = (e) => {
    console.log("clicked", value);
    console.log(setValue(e.target.value));
    setValue(value);
  };

  const handleChange = () => {
    setMode("add");
    setSelectedTask(null); //reset
    setOpenModal(true);
    console.log(React.version);
  };

  // const handleAddTask = (formData) => {
  //   if (mode === "edit") {
  //     const updateTasks = tasks.map((task) => {
  //       return task.id === selectedTask.id ? { ...task, ...formData } : task;
  //     });
  //     setTasks(updateTasks);
  //   } else {
  //     const newTask = {
  //       id: Date.now(),
  //       ...formData,
  //       // isCompleted: false,
  //       completedDays: {},
  //       createdAt: Date.now(),
  //       isActive: true,
  //     };
  //     // setTasks([...tasks, newTask]);
  //     setTasks((prev) => [...prev, newTask]);
  //   }
  //   handleClose();
  //   console.log(tasks);
  // };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedTask(null);
    setMode("add");
  };

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // const handleDeletTask = (idx) => {
  //   const updateDeleteTask = tasks.filter((ele) => {
  //     return ele.id !== idx;
  //   });
  //   setTasks(updateDeleteTask);
  //   console.log(`${idx} no task deleted`);
  // };

  const handleEditTask = (task) => {
    console.log(`${task} no task edited`);

    setSelectedTask(task);
    setMode("edit");
    setOpenModal(true);
  };

  const updateTask = (updatedTask) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask;
    }

    return task;
  });

  setTasks(updatedTasks);

  setSelectedTask(null);
  setMode("create");
  handleClose();
};

  const handleCompleteTask = (id, selectedDay) => {
  const updatedTasks = tasks.map((task) =>{
    if(task.id === id){
      return{
        ...task,
        completedDays:{
          ...task.completedDays,
          [selectedDay]: !task.completedDays?.[selectedDay],
        },
      }
    }
    return task;
  });

  setTasks(updatedTasks);
};
// wraap func
const handleCreateTask = (formData) => {
  addTask(formData);
  handleClose();
};



  return (
    <div className="dashboard">
      <MainLayout
        openDialog={handleChange}
        tasks={tasks}
        taskDelete={deleteTask}
        editTask={handleEditTask}
        value={value}
        onChange={onChange} 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        handleCompleteTask={handleCompleteTask}
        // updateTask= {updateTask}
      />
      <ModalUI
        className="task_modal"
        open={openModal}
        onClose={handleClose}
        mode={mode}
        content={
          <TaskForm
            // onSubmitTask={handleAddTask}
            onSubmitTask={handleCreateTask}
            selectedTask={selectedTask}
            onEditTask={updateTask}
            mode={mode}
          />
        }
      />
    </div>
  );
};

export default Dashboard;
