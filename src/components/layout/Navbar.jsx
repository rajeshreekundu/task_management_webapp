import logo from "@/assets/images/logo.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

function Navbar({ openDialog }) {
  return (
    <div className="navbar--wrap">
      <div className="brand_wrap">
        <img src={logo} alt="" className="logo_cls" />
      </div>

      <IconButton
        aria-label="Add"
        size="small"
        onClick={(e) => {
          openDialog();
          e.currentTarget.blur();
        }}
      >
        <AddCircleIcon titleAccess="Add Task" />
      </IconButton>
    </div>
  );
}

export default Navbar;
