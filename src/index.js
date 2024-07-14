import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Project from "./routes/project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes basename="/">
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </BrowserRouter>
);
