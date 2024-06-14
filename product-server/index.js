// Importer et initaliser express qui aide à créer des chemins pour notre API
const express = require("express");
const app = express();
// Définir le port du localhost
const port = 3000;

// CORS Permet d'avoir une relation avec des applications locale (dans notre cas le frontend react)
const cors = require("cors");
app.use(cors());

const db = require("./db");

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

// Route1 : GET - '/' - retourne 'hello world'
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/produits", async (req, res) => {
  const AllProducts = await Product.find();
  res.json({ produits: AllProducts });
});

app.listen(port, () =>
  console.log(`L'API est lancé dans le lien : http://localhost:${port}!`)
);
