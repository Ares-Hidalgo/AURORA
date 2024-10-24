// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Asegúrate de que apunta a App.jsx
import "./Styles/style.css"; // Asegúrate de que esta ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
