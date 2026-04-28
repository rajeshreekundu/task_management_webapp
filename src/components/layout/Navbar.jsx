import logo from "@/assets/images/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useState } from "react";

function Navbar({ openDialog }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !isDarkMode);

    if (!isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.toggle("light-mode", false);
    }else{
      localStorage.setItem('theme', 'light')
      document.body.classList.toggle("light-mode", true);
    }
  };
  return (
    <div className="navbar-wrap">
      <div className="brand_wrap">
        <img src={logo} alt="" className="logo_cls" />
      </div>

      <div>
        <button
          className="icon-btn task-add"
          aria-label="Add"
          size="small"
          onClick={(e) => {
            openDialog();
            e.currentTarget.blur();
          }}
        >
          <AddCircleIcon titleAccess="Add Task" />
        </button>
        <button className="icon-btn" onClick={toggleTheme}>
          {!isDarkMode ? (
            <LightModeOutlinedIcon titleAccess="Toggle Theme" titleAccess='Dark Theme'/>
          ) : (
            <DarkModeOutlinedIcon titleAccess="Toggle Theme" titleAccess='Light Theme'/>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
