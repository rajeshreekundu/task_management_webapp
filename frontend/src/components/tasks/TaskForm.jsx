import FormField from "../ui/FormField";
import "./task.css";
import { useState } from "react";
import Button from "../ui/Button";

const TaskForm = ({ onSubmitTask, selectedTask, mode, onEditTask }) => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const [taskSubmit, setTaskSubmit] = useState(false);

  const initialFormData = {
    title: "",
    category: "health",
    note: "",
    days: [today], // set the default selected day to today.
  };

  const [formData, setFormData] = useState(
    mode === "edit" && selectedTask
      ? {
          id: selectedTask.id,
          title: selectedTask.title || "",
          category: selectedTask.category || "health",
          note: selectedTask.note || "",
          days: selectedTask.days || [],
        }
      : initialFormData,
  );
  //
  //   console.log("selectedTask:", selectedTask);
  // console.log("formData:", formData);

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskSubmit(true);

    if (
      !formData.title.trim() ||
      !formData.note.trim() ||
      formData.days.length === 0
    ) {
      // alert("please select at least one day");
      return;
    }

    if (mode === "edit") {
      console.log("Updated form data:", formData);

      onEditTask(formData);
    } else {
      onSubmitTask(formData);
    }

    setFormData(initialFormData);
    // console.log(tasks);
  };

  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log(formData.days);

    // 👉 Normal day logic
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        days: [...prev.days, value],
      }));
    } else {
      // here uncheck logic inside of else block
      setFormData((prev) => ({
        ...prev,
        days: prev.days.filter((day) => day !== value),
      }));
    }

    // 👉 If "All Days" clicked
    if (value === "all") {
      setFormData((prev) => ({
        ...prev,
        days: checked ? allDays : [],
      }));
      return;
    }
  };

  return (
    <>
      <form className="task-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <FormField
            label="Task Title *"
            type="text"
            value={formData.title}
            onChange={inputHandleChange}
            placeholder="Enter task name"
            name="title"
            error={taskSubmit && !formData.title.trim()}
            errorMsg="Task title is required"
          />
        </div>

        <div className="form-group">
          <label htmlFor="task">Task Category</label>
          <div className="radio-group">
            <FormField
              componentClass="category-radio-field"
              label="Health"
              type="radio"
              value="health"
              name="category"
              onChange={inputHandleChange}
              checked={formData.category === "health"}
            />
            <FormField
              componentClass="category-radio-field"
              label="Personal"
              type="radio"
              value="personal"
              name="category"
              onChange={inputHandleChange}
              checked={formData.category === "personal"}
            />

            <FormField
              componentClass="category-radio-field"
              label="Work"
              type="radio"
              value="work"
              name="category"
              onChange={inputHandleChange}
              checked={formData.category === "work"}
            />
            <FormField
              componentClass="category-radio-field"
              label="Travel"
              type="radio"
              value="travel"
              name="category"
              onChange={inputHandleChange}
              checked={formData.category === "travel"}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="days-label-top">
            <label htmlFor="task">Task Days *</label>
            <FormField
              componentClass="allday-checkbox-field"
              label="All Days"
              type="checkbox"
              value="all"
              onChange={handleCheckboxChange}
              checked={formData.days.length === 7}
            />
          </div>

          <div className="all-days-checkbox">
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Monday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Monday")}
              >
                <span>M</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Tuesday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Tuesday")}
              >
                <span>T</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Wednesday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Wednesday")}
              >
                <span>W</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Thursday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Thursday")}
              >
                <span>T</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Friday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Friday")}
              >
                <span>F</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Saturday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Saturday")}
              >
                <span>S</span>
              </FormField>
            </div>
            <div className="checkbox-group">
              <FormField
                componentClass=""
                type="checkbox"
                value="Sunday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Sunday")}
              >
                <span>S</span>
              </FormField>
            </div>
          </div>
          {formData.days.length === 0 && taskSubmit && (
            <p className="form-error">Please select at least one day</p>
          )}
        </div>

        <div className="form-group">
          <FormField
            label="Task Description *"
            placeholder="Notes"
            type="textarea"
            value={formData.note || ""}
            onChange={inputHandleChange}
            rows="5"
            name="note"
            error={taskSubmit && !formData.note.trim()}
            errorMsg="Task description is required"
          />
        </div>

        <Button
          btn ={{
            type: 'submit',
            text : mode === 'edit' ? 'Update Task' : 'Add Task',
            variant: "primary",
          }}
        />
      </form>
    </>
  );
};
export default TaskForm;
