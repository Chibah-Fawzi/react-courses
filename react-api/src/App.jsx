import "./App.css";

// 6. Importer useState de 'react'
import { useState } from "react";
function App() {
  // 7. Déclarer un state
  const [data, setData] = useState([]);

  // 1. Créer une function qui récupére les données d'une API
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
      .then((json) => setData(json));
  }

  return (
    <>
      {/* 5. On crée un button avec un énevement onclick qui déclanche la requête */}
      <button onClick={() => getData()}>Afficher les posts</button>

      <section>
        {/* 9. On affiche la liste données "data" avec la function JS par défaut map, qui pour chaque élement de la liste crée une div qui contient : 
        - le titre 
        - l'id du post 
        - l'id du user 
        - le contenu du post */}

        {data.map((element, index) => (
          <div key={index} className="card">
            <h1>
              {element.id} - {element.title}
            </h1>
            <h3>{element.userId}</h3>
            <p>{element.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
