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
import { useEffect, useState } from "react";
import { Category, ModeEditOutlineSharp } from "@mui/icons-material";

const TaskForm = ({ onSubmitTask, selectedTask, mode}) => {
  const initialFormData = {
    title: "",
    category: "health",
    note: "",
  };
  const [formData, setFormData] = useState(initialFormData);


  useEffect(() => {
  if (mode === 'edit' && selectedTask) {
    setFormData({
      title: selectedTask.title || "",
      category: selectedTask.category || "health",
      note: selectedTask.note || "",
    });
  }
}, [selectedTask, mode]);



  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitTask(formData);  


    // setTasks([...tasks, formData]);
    setFormData(initialFormData);
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
            value={formData.title || ""}
            onChange={inputHandleChange}
            // onChange={(e) => {
            //   inputHandleChange(e);
            // }}
          />
        </FormControl>

        <FormControl component="fieldset" required margin="normal">
          <FormLabel>Task Category</FormLabel>
          <RadioGroup row  value={formData.category || ""}>
            <FormControlLabel
              value="health"
              control={<Radio />}
              label="Health"
              name="category"
              onChange={inputHandleChange}
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work Life"
              name="category"
              onChange={inputHandleChange}
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
            // value={formData.note}
            value={formData.note || ""}
            // onChange={(e) => {
            //   inputHandleChange(e);
            // }}
            onChange={inputHandleChange}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {mode === "edit" ? "Update Task" : "Add Task"}
          {/* Add task */}
        </Button>
      </form>      
    </>
  );
};
export default TaskForm;
