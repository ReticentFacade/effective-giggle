import { Routes, Route } from "react-router-dom";
import './css/App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Socials from "./pages/Socials";
import GoogleLoginFunction from "./components/GoogleLogin";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <GoogleLoginFunction></GoogleLoginFunction> */}
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/order" element={ <Order /> } />
        <Route path="/socials" element={ <Socials /> } />
      </Routes>
    </div>
  );
}

export default App;
