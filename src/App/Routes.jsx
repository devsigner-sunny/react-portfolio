import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Section/Home/Home";
import About from "../Section/About/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/react-portfolio">
        <Route index element={Home} />
        <Route path="about" element={About} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
