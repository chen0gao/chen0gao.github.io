import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Project from "./routes/project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project" element={<Project />} />
    </Routes>
  </Router>
);
