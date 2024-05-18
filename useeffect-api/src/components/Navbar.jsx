import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        width: "50vw",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/produits">Produits</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
