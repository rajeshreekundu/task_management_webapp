import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from '../ui/card';
import TaskForm from '../tasks/TaskForm';

import "./layout.css";

function MainLayout() {
  return (
    <div className="layout_wrapper">
      <Navbar />
      <div className="main_area">
        <Sidebar />
        <main className="main_content">
          <h1>MAIN Layout</h1>
          <Card/>

          <TaskForm/>

        </main>
      </div>
    </div>
  );
}

export default MainLayout;
