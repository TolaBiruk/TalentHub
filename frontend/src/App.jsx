// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Employer from "./pages/Employer";
import Developer from "./pages/Developer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 bg-primary text-white">
          <div className="font-bold text-xl">TalentHub</div>
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/employer">Employer</Link>
            <Link to="/developer">Developer</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
