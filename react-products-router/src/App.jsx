import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./Products";
import Home from "./Home";
import { ContactUs } from "./Contact";
export default function App() {
  const [produits, setProduits] = useState([]);

  function getData() {
    fetch("http://localhost:3000/produits")
      .then((response) => response.json())
      .then((json) => setProduits(json.produits))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/produits" component={Products} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/" render={(props) => <Home produits={produits} />} />
      </Switch>
    </div>
  );
}
