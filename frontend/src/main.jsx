import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx";
import AppProviders from "./contexts/AppProviders";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode> </StrictMode>
  <BrowserRouter>
    <AppProviders>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AppProviders>
  </BrowserRouter>,
);
