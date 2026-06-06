import { createContext, useContext, useEffect, useState } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    try {
      const parsed = JSON.parse(savedTasks);

      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (formData) => {
    const newTask = {
      id: Date.now(),
      ...formData,
      completedDays: {},
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);

    setTasks(updateTask);
  };
  // Edit Task

  return (
    <>
      <TaskContext.Provider value={{ tasks, setTasks, addTask, deleteTask }}>
        {children}
      </TaskContext.Provider>
    </>
  );
};

export const useTask = () => useContext(TaskContext);
