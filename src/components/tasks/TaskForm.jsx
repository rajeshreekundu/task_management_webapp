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

function TaskForm() {
  return (
    <>
      <form className="task-form">
        {/* Task Name */}
        <TextField
          label="Task Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Task Category */}
        <FormControl margin="normal">
          <FormLabel>Task Category</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="health"
              control={<Radio />}
              label="Health"
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work Life"
            />
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal Life"
            />
            <FormControlLabel
              value="Travel"
              control={<Radio />}
              label="Travel"
            />
          </RadioGroup>
        </FormControl>

        {/* Task Duration Select */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Task Duration</InputLabel>
          <Select label="Task Duration">
            <MenuItem value="oneday">One Day</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
            <MenuItem value="allday">All Day</MenuItem>
          </Select>
        </FormControl>

        {/* Description */}
        <TextField
          label="Description / Note"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        {/* Submit Button */}
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Add Task
        </Button>
      </form>
    </>
  );
}
export default TaskForm;
