import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductPage({ products }) {
  const params = useParams();

  const productID = params.id;

  const produitActuel = products.find((produit) => produit._id == productID);
  return (
    <section className="flex flex-col px-[20vw] font-secondary">
      <h1 className="text-3xl my-10 font-bold text-center">Product Page</h1>

      <div className="flex justify-between  border-2 p-32 rounded-md shadow-sm">
        <img
          className="hover:opacity-70 cursor-pointer transition-all"
          src={produitActuel.image}
          alt=""
        />
        <div>
          <h2 className="text-[40px] font-bold text-[var(--main-color)]">
            {produitActuel.title}
          </h2>
          <h4 className="text-[30px] font-extrabold">{produitActuel.price}</h4>
        </div>
      </div>
    </section>
  );
}
