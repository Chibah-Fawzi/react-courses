import { useEffect } from "react";
import { useState } from "react";
import Loader from "./assets/Loader";
import "./App.css";

function App() {
  // 8. On crée l'état pour sauvegarder la liste des livres, en ajoutant une valeur par défaut []
  const [books, setBooks] = useState([]);

  // 13. On crée un état pour ajouter un loader (chargement) qui par défaut doit être faux
  const [loading, setLoading] = useState(false);
  // 2. On crée un function pour récupérer la valeur de l'input
  function handleInput(event) {
    // 4. On ajouter cette ligne pour empêcher la page de s'actualiser quand on click sur le button.
    event.preventDefault();

    // 14. On le rend vrai pour commancer le chargement au moment où on clique sur le button
    setLoading(true);

    // 5. On récupére la valeur de l'input de recherche
    const inputValue = event.target.search.value;

    // 6. FORMATER LE TEXTE : Transformer les éspaces en "+""
    //    - Split : Convertis la chaîne de caractéres en liste en séparant chaque caractére ("")
    const valueList = inputValue.split("");
    //    - Pour chaque caractére de la liste 'valueList' on cherche les espaces et on les convertis en "+"
    for (let i = 0; i < valueList.length; i++) {
      if (valueList[i] == " ") {
        valueList[i] = "+";
      }
    }
    //    - Une fois convertis, on rejoins la liste des caractére en forme de mot
    const joinedValueList = valueList.join("");

    // 7. On appelle l'API des livres, et on fais passer la valeur du mot recherché et formaté, dans la query "?q="
    //    - URL/CHEMIN?q=inputvalue
    fetch("https://openlibrary.org/search.json?q=" + joinedValueList, {
      method: "GET",
    })
      //    - On convertis la réponse en format JSON
      .then((response) => response.json())

      // 9. On store la valeur de la réponse de l'API dans l'état 'books'
      .then((json) => {
        setBooks(json.docs);
        // 15. On rend le loading en faux, car on a reçu la réponse voulu
        setLoading(false);
      })
      // 10. On affiche si il y'a une erreur
      .catch((err) => {
        console.log(err);
        // 16. On rend le loading en faux, car on a reçu une erreur
        setLoading(false);
      });
  }

  return (
    <>
      <h1>Book App</h1>

      {/* 1. On crée un formulaire qui contient une input pour chercher le livre, et un button pour lancer la recherche */}
      {/* 3. On ajoute un évenement onSubmit qui envoie les données des inputs du formulaire et qui appelle la function handleInput() en cliquant sur le button Search Book
        - Quand je click sur le button, la function handleInput s'éxécute, et on fais passer l'objet de l'évenement(event)
      */}
      <form onSubmit={(event) => handleInput(event)}>
        <input id="search" type="text" placeholder="Trouvez un livre" />
        <button id="search-button" type="submit">
          Search book
        </button>
      </form>

      {/* 17. On check si le loading est vrai, si c'est le cas affiche le composant de chargement <Loader/> */}
      {/*       - Pour çà on utlise la "condition ternaire" ex: condition ? cas 1 : cas 2 */}
      {loading ? (
        <div style={{ margin: "10vh 0" }}>
          <Loader />
        </div>
      ) : (
        // 11. On crée une section où on affiche les élements la liste des livres
        <section className="books">
          {/* 12. On utilise map pour afficher chaque élement de la liste des livres (books), et afficher pour chaque livre, son titre, le nom de l'auteur, la date et le nombre de pages */}
          {/*     - MAP: Modifie chaque élement d'une liste, et retourne une nouvelles avec les élements modifiés */}
          {books.map((book) => (
            <div className="book">
              <h1>{book.title}</h1>
              <h2>Author: {book.author_name}</h2>
              <div className="year-pages">
                <h6>Year: {book.first_publish_year}</h6>
                <h6>Pages: {book.number_of_pages_median}</h6>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default App;
