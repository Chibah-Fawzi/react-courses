import React from "react";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <section className="text-center font-secondary my-[10vh]">
      <h2 className="text-3xl font-bold uppercase">Products</h2>

      <h4 className="text-xl font-bold uppercase my-20">
        LOWER 48 STATES... $8.99 FLAT SHIPPING | FREE SHIPPING $99 OR MORE
      </h4>

      <h2 className="text-3xl font-bold uppercase">Product lists</h2>
      <div className="grid grid-cols-3 gap-y-10 mt-10">
        {products.map((produit) => (
          <Link to={`/produits/${produit._id}`}>
            <div className="flex flex-col items-center hover:underline">
              <img
                className="hover:opacity-70 cursor-pointer transition-all"
                src={produit.image}
                alt=""
              />
              <h2 className="text-xl">{produit.title}</h2>
              <h4 className="text-lg font-bold">{produit.price}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
