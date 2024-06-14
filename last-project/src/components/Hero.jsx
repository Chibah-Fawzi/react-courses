import React from "react";
import "../App.css";
export default function Hero() {
  return (
    <section className="hero font-secondary text-center h-[70vh] flex flex-col justify-center items-center text-white">
      <h1 className="text-[40px] font-bold">Milican Pecan</h1>
      <p className="text-lg">Delicious Orchard Fresh Pecans Since 1888</p>
      <button className="text-lg bg-[var(--main-color)] px-8 py-4 mt-10 hover:bg-[var(--hover-main-color)] transition-all uppercase font-semibold">
        Buy pecans now!
      </button>
    </section>
  );
}
