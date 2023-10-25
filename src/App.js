import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/success/:token" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
