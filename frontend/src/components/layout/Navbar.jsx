import logo from "@/assets/images/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/index";

function Navbar({ openDialog }) {

  const {theme, toggleTheme} = useContext(ThemeContext)
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
          {theme ? (
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
