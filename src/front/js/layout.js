import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Posts from "./pages/posts";
import Navbar from "./component/navbar";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
