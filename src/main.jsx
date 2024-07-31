import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router/index.jsx";
import { ThemeProvider } from "./provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ThemeProvider>
);
