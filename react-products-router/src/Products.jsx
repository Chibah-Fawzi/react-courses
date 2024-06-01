import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import emailjs from "emailjs-com";
import { ContactUs } from "./Contact";

export default function Products() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          title,
          image,
          price,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  return !title || !image || !price ? (
    <h1>
      Annonce introuvable <br /> Cette annonce n'existe pas ou n'existe plus !
    </h1>
  ) : (
    <div>
      <h1>Products</h1>

      <h2>Titre: {title}</h2>
      <img src={image} alt="" />
      <h5>Price: {price}</h5>

      <button onClick={(e) => sendEmail(e)}>Ajouter à l'email</button>

      {/* <ContactUs /> */}
    </div>
  );
}
