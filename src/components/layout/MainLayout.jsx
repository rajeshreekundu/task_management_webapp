import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "../ui/card";
import TaskForm from "../tasks/TaskForm";
import MyModal from "../ui/ModalUI";

import "./layout.css";

function MainLayout({ openDialog, tasks }) {
  return (
    <div className="layout_wrapper">
      <Navbar openDialog={openDialog} />
      <div className="main_area">
        <Sidebar />
        <main className="main_content">
          <h1>MAIN Layout {tasks.length}</h1>
          
            {tasks.length>=1 ?
              (<div className="tasks-card-list">
              {tasks.map((ele) => {
              return <Card task={ele} key={ele.id} />;
            })}
            
            </div>) : (
              <div>No Task Found</div>
            )
             }
            
          
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
