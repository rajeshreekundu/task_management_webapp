import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import "./task.css";
import MyModal from "../ui/ModalUI";
import { useState } from "react";
import { Category } from "@mui/icons-material";

const TaskForm = ({ onSubmitTask }) => {
  const initialFormData = {
    title: "",
    category: "health",
    note: "",
  };
  const [formData, setformData] = useState(initialFormData);
  // const [tasks, setTasks] = useState([]);

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitTask(formData);    


    // setTasks([...tasks, formData]);
    setformData(initialFormData);
    // console.log(tasks);
  };

  return (
    <>
      <form className="task-form" autoComplete="off" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            label="Task Name"
            variant="outlined"
            required
            name="title"
            value={formData.title}
            onChange={(e) => {
              inputHandleChange(e);
            }}
          />
        </FormControl>

        <FormControl component="fieldset" required margin="normal">
          <FormLabel>Task Category</FormLabel>
          <RadioGroup row  value={formData.category}>
            <FormControlLabel
              value="health"
              control={<Radio />}
              label="Health"
              name="category"
              onChange={(e) => {
                inputHandleChange(e);
              }}
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work Life"
              name="category"
              onChange={(e) => {
                inputHandleChange(e);
              }}
            />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            required
            variant="outlined"
            label="Description / Note"
            multiline
            rows={3}
            name="note"
            value={formData.note}
            onChange={(e) => {
              inputHandleChange(e);
            }}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {/* {props.mode === "edit" ? "Update Task" : "Add Task"} */}
          Add task
        </Button>
      </form>      
    </>
  );
};
export default TaskForm;
