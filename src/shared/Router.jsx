import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personaltaskthree" element={<Home />} />
        <Route path="/personaltaskthree/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
