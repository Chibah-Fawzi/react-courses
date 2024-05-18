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
      {/* 6. On ajoute Link pour rediriger quand on click sur les élements de la nav, vers le chemins adéquats */}
      <Link to="/">Home</Link>
      <Link to="/produits">Produits</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
