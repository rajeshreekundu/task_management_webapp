import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ModalUI = (props) => {
  return (
    <Dialog className={props.className} open={props.open} onClose={props.onClose}>
      <DialogTitle>
        {props.mode === "edit" ? "Edit Task" : "Add Task"}

        <IconButton onClick={props.onClose}>
          <CloseRoundedIcon titleAccess="Close" />
        </IconButton>
      </DialogTitle>

      <DialogContent>{props.content}</DialogContent>

      {/* Buttons */}
      {/* <DialogActions>
        <Button onClick={props.onClose} color="error">
          Cancel
        </Button>

        <Button variant="contained" onClick={props.onClose}>
          {props.mode === "edit" ? "Update Task" : "Add Task"}
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default ModalUI;
