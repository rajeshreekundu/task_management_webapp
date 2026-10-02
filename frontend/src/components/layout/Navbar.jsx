import logo from "@/assets/images/logo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/index";
import UserMenu from "./UserMenu";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Sun, Moon, CirclePlus  } from "lucide-react";
import { AuthContext } from "../../contexts/index";
import Button from "../ui/Button";

function Navbar({ openDialog }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, handleLogout } = useContext(AuthContext);

  console.log("Navbar User:", user);

  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const result = await handleLogout();

      console.log("123" + result.success);

      if (result.success) {
        console.log("Logout success - navigating to login");
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(`Logout error ${err}`);
    }
  };

  //
  console.log("Theme:", theme);

  return (
    <div className="navbar-wrap">
      <div className="brand_wrap">
        <img src={logo} alt="" className="logo_cls" />
      </div>

      <div style={{ display: "flex" }}>
        <Button
          btn={{
            variant: "ghost",
            icon: <CirclePlus  titleAccess="Add Task" />,
            className: "icon-btn task-add",
          }}
          aria-label="Add"
          size="small"
          onClick={(e) => {
            openDialog();
            e.currentTarget.blur();
          }}
        />

        <Button
          btn={{
            variant: "ghost",
            icon:
              theme === "dark" ? (
                <Moon titleAccess="Dark Theme" />
              ) : (
                <Sun titleAccess="Light Theme" />
              ),
          }}
          className="icon-btn"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        />
        <UserMenu user={{ avatar: true, avatarText: user?.name
          ?.split(" ").map((word)=>{
            return word.charAt(0);
          })
          .join("")
          .toUpperCase()
          }}>
          <p>
            Hello, {user.name}
          </p>
          <li onClick={logoutUser}>
            <LogOut size={15} /> Logout
          </li>
        </UserMenu>
      </div>
    </div>
  );
}

export default Navbar;
