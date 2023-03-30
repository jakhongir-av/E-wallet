import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MainContextProvider } from "./context/mainContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
