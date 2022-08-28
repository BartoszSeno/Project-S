import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Register from "./routes";
import "./media/mediahome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Register />
  </>
);

reportWebVitals();
