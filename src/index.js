import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);