import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "../ui/Card";
import "./layout.css";
import { useEffect, useState } from "react";

const MainLayout = ({
  openDialog,
  tasks,
  taskDelete,
  editTask,
  value,
  onChange,
  selectedDay,
  setSelectedDay,
  handleCompleteTask,
}) => {
  const filteredTasks = tasks.filter((task) => {
    return Array.isArray(task.days) && task.days.includes(selectedDay);
  });
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="layout_wrapper">
      <Navbar openDialog={openDialog} />
      <div className="main_area">
        {/* <Sidebar isValue={value} onChange={onChange} /> */}
        <main className="main_content">
          <h1>Total Tasks {tasks.length}</h1>
          <div className="day-filter">
            {/* <button
              onClick={() => {
                const day = 'Monday';
                setSelectedDay(day);
                console.log(day);
              }}
            >
              Mon
            </button> */}
            {days.map((day) => (
              <button
                key={day}
                className={`weekday ${selectedDay === day ? "active" : ""}`}
                onClick={() => setSelectedDay(day)}
              >
                <span className="desktop-day">{day.slice(0, 3)}</span>
                <span className="mobile-day">{day.slice(0, 1)}</span>
              </button>
            ))}
          </div>
          {filteredTasks.length >= 1 ? (
            <div className="tasks-card-list">
              {[...filteredTasks].reverse().map((ele, idx) => {
                return (
                  <Card
                    task={ele}
                    key={ele.id}
                    onDelete={taskDelete}
                    onEdit={editTask}
                    handleCompleteTask={handleCompleteTask}
                    selectedDay={selectedDay}
                    on
                    // onEdit={() => editTask(ele, idx)}
                  />
                );
              })}
            </div>
          ) : (
            <div>No Task Found</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
