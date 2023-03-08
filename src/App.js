import './css/App.css';
import Navbar from "./components/Navbar/Navbar.js";
import GroupComponent from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Socials from "./pages/Socials";

function App() {
  return (
    <div className="App">
      <GroupComponent />

      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/order" element={ <Order /> } />
        <Route path="/socials" element={ <Socials /> } />
      </Routes>
    </div>
  );
}

export default App;
