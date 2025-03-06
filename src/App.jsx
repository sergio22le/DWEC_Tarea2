import React from "react";
import ReactDOM from 'react-dom/client';
import Titulo from "./Titulo.jsx";
import "./index.css";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Titulo />
  </React.StrictMode>
);