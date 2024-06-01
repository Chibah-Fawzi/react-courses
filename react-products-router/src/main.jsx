import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* On rend BrowserRouter en tant que parent du composant <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
