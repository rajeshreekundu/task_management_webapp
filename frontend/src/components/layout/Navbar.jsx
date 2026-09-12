import logo from "@/assets/images/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/index";
import UserMenu from "./UserMenu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar({ openDialog }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      console.log(res.data);
      navigate("/"),  { replace: true };
    } catch (err) {
      console.log(`Logout error ${err}`);
    }
  };

  return (
    <div className="navbar-wrap">
      <div className="brand_wrap">
        <img src={logo} alt="" className="logo_cls" />
      </div>

      <div style={{ display: "flex" }}>
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
            <LightModeOutlinedIcon titleAccess="Dark Theme" />
          ) : (
            <DarkModeOutlinedIcon titleAccess="Light Theme" />
          )}
        </button>
        <UserMenu user={{ avatar: true, avatarText: "M" }}>
          <li onClick={handleLogout}>
            Logout
          </li>
           <li>
            {/* <img src="" alt="" /> */}
            <Link>Profile</Link>
          </li>
        </UserMenu>
      </div>
    </div>
  );
}

export default Navbar;



/**
 * when i click on logout menu in console it display Successfully logout, and rediect to login page but when i click browser back option it will again display dashboard ui i think with same user after that again i click logout menu it will show error on console how to fix, and prevent after logout not to possible to display dashbaord ui 
 */
