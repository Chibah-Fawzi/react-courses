import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home({ produits }) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {produits.map((produit, index) => (
        <div style={{ margin: "10vh" }} key={index}>
          <img width={200} src={produit.image} />
          <h2>{produit.title}</h2>
          <h6>{produit.price}</h6>
          <button>
            <Link
              to={`/produits?title=${produit.title}&price=${produit.price}&image=${produit.image}`}
            >
              Acheter
            </Link>
          </button>
        </div>
      ))}
    </section>
  );
}
