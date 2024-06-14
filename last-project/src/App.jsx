import { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/produits")
      .then((res) => res.json())
      .then((json) => setProducts(json.produits))
      .catch((err) => console.log(err?.data.message));
  }, []);
  return (
    <main>
      <Navbar />
      <Switch>
        <Route
          path="/produits/:id"
          render={(props) => <ProductPage {...props} products={products} />} // Rendering the Auth component with props and setCookie
        />
        <Route
          path="/"
          render={(props) => (
            <>
              <Hero products={products} {...props} />
              <Products {...props} products={products} />
            </>
          )} // Rendering the Auth component with props and setCookie
        />
      </Switch>
    </main>
  );
}

export default App;
