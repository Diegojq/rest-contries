import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/index.jsx";
import { ThemeProvider } from "./components/ThemeContext/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
