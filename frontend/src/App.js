import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login/Login.js";
import Order from "./pages/Order.js";
import Socials from "./pages/Socials.js";
import Register from "./pages/Login/Register.js";
import NotFound from "./components/404.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <GoogleLoginFunction></GoogleLoginFunction> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/404" element={<NotFound />} />

        <Route path="/register" element={<Register />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </div>
  );
}

export default App;
