import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "../ui/card";
import "./layout.css";
import { useEffect, useState } from "react";

function MainLayout({ openDialog, tasks, taskDelete, editTask }) {

  return (
    <div className="layout_wrapper">
      <Navbar openDialog={openDialog} />
      <div className="main_area">
        <Sidebar />
        <main className="main_content">
          <h1>Total Tasks {tasks.length}</h1>

          {tasks.length >= 1 ? (
            <div className="tasks-card-list">
              {[...tasks].reverse().map((ele, idx) => {
                return (
                  <Card
                    task={ele}
                    key={ele.id}
                    onDelete={taskDelete}
                    onEdit={editTask}
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
}

export default MainLayout;
