// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <h2>🎬 Movie Jhones</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movie/123" style={{ color: "white", textDecoration: "none" }}>
            Ejemplo Detalle
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

