import logo from "@/assets/images/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="navbar--wrap">
      <div className="brand_wrap">
        <img src={logo} alt="" className="logo_cls" />
      </div>

      <Button>
        <AddCircleIcon titleAccess="Add Task" />
      </Button>
    </div>
  );
}

export default Navbar;
