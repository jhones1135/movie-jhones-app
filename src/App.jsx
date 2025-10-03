import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div style={{ background: "#000", minHeight: "100vh" }}>
        {/* 🔹 Barra de navegación */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "15px",
            background: "#222",
          }}
        >
          <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
            Inicio
          </Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
            Acerca de
          </Link>
        </nav>

        {/* 🔹 Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
