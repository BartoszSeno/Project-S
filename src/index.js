import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Register from "./routes";
import "./media/mediahome.css";
import "./media/medianews.css";
import "./media/mediashop.css";
import "./media/medialoginregister.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Register />
  </>
);

reportWebVitals();
