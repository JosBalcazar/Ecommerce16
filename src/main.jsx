import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarritoApp } from "./CarritoApp";
import "./sass/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoApp />
    </BrowserRouter>
  </React.StrictMode>
);
