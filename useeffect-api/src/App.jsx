import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Produits from "./components/Produits";
import Navbar from "./components/Navbar";

function App() {
  //  On déclare le state du username et de l'erreur
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);
  // On déclare l'état du loading vrai par défaut
  const [loading, setLoading] = useState(true);

  function getData() {
    // 2. On définis la requête de l'api
    // URL : https://jsonplaceholder.typicode.com
    // Chemin : /posts
    // methode : GET

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      // 3. On récupére la réponse de l'API et on la transforme en format JSON
      .then((response) => response.json())
      // 4. On récupére la donnée en format JSON et on l'affiche dans la console
      // 8. On ajoute la donnée en format JSON au state "data" avec la function setData()
      .then((json) => {
        setData(json);
        // Une fois que les données de l'API sont récupérés, enléve le loading
        setLoading(false);
      });
  }

  // Execute le code ci dessous sauf si le username change (UseEffect on updating)
  useEffect(() => {
    // Check si la taille du username est en dessous de 10 : Active l'erreur, sinon désactive là.
    if (username.length < 10) {
      setError(true);
    } else {
      setError(false);
    }
    // Le trigger pour éxecuter le code au dessus
  }, [username]);

  // Exectute le code ci-dessous lors du premier affichage de la page
  useEffect(() => {
    getData();
  }, []);

  // Si le loading est true ? affiche le paragraphe de chargement : sinon affiche le code normalement
  return loading ? (
    <h1>LOADING ...</h1>
  ) : (
    <>
      <Navbar />

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/produits" component={Produits} />
        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              setUsername={setUsername}
              data={data}
              error={error}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
