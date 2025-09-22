import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout.jsx";
import Homepage from "./page/Home/Home.jsx";
import Dashboard from "./page/DashBoard/DashBoard.jsx";
import Model from "./page/Model/Model.jsx";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} /> 
          <Route path="dashboard" element={<Dashboard />} /> 
          <Route path="model" element={<Model />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
