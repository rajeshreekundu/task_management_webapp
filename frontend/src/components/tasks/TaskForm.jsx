import "./task.css";
import { useEffect, useState } from "react";

const TaskForm = ({ onSubmitTask, selectedTask, mode, onEditTask }) => {
  const today = new Date().toLocaleDateString("en-US", {weekday: "long"});

  const initialFormData = {
    title: "",
    category: "health",
    note: "",
    days: [today], // set the default selected day to today.
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (mode === "edit" && selectedTask) {
      // setFormData({
      //   title: selectedTask.title || "",
      //   category: selectedTask.category || "health",
      //   note: selectedTask.note || "",
      //   days: selectedTask.days || [],
      // });
      setFormData(selectedTask);
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
    if(formData.days.length === 0){
      alert("please select at least one day");
      return;
    }

    if (mode === "edit") {
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

    // 👉 If "All Days" clicked
    if (value === "all") {
      setFormData((prev) => ({
        ...prev,
        days: checked ? allDays : [],
      }));
      return;
    }
    // 👉 Normal day logic
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        days: [...prev.days, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        days: prev.days.filter((day) => day !== value),
      }));
    }
  };

  return (
    <>
      <form className="task-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task Title * </label>
          <input
            type="text"
            value={formData.title}
            onChange={inputHandleChange}
            name="title"
            placeholder="Enter task name"
            className="input-cls"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="task">Task Category *</label>
          <div className="radio-group">
            <label htmlFor="health">
              <input
                type="radio"
                value="health"
                name="category"
                onChange={inputHandleChange}
                checked={formData.category === "health"}
              />
              Health
            </label>
            <label htmlFor="personal">
              <input
                type="radio"
                value="personal"
                name="category"
                onChange={inputHandleChange}
                checked={formData.category === "personal"}
              />
              Personal Life
            </label>
            <label htmlFor="work">
              <input
                type="radio"
                value="work"
                name="category"
                onChange={inputHandleChange}
                checked={formData.category === "work"}
              />
              Work Life
            </label>
            <label htmlFor="travel">
              <input
                type="radio"
                value="travel"
                name="category"
                onChange={inputHandleChange}
                checked={formData.category === "travel"}
              />
              Travel
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="days-label-top">
            <label htmlFor="task">Task Days *</label>
            <label>
              <input
                type="checkbox"
                value="all"
                onChange={handleCheckboxChange}
                checked={formData.days.length === 7}
              />
              All Days
            </label>
          </div>

          <div className="all-days-checkbox">
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Monday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Monday")}
              />
              <span>M</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Tuesday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Tuesday")}
              />
              <span>T</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Wednesday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Wednesday")}
              />
              <span>W</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Thursday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Thursday")}
              />
              <span>T</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Friday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Friday")}
              />
              <span>F</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Saturday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Saturday")}
              />
              <span>S</span>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                value="Sunday"
                name="day"
                onChange={handleCheckboxChange}
                checked={formData.days.includes("Sunday")}
              />
              <span>S</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="desc">Task Description</label>
          <textarea
            className="input-cls"
            placeholder="Notes"
            value={formData.note || ""}
            onChange={inputHandleChange}
            rows="5"
            name="note"
            required
          />
        </div>
        <button type="submit" className="butn-cls">
          {mode === "edit" ? "Update Task" : "Add Task"}
          {/* Add task */}
        </button>
      </form>
    </>
  );
};
export default TaskForm;



// I have attache my code snippet for TasForm.jsx file. here also exist for desktop shown day like Mon, Tues....Sun but for mobile view It Days are displaying first letter like M, T, W, .... S. So now i want to apply feature what alredy you send the code just before so now tell me where i modified and also meantion why this I modified. 