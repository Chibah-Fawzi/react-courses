// On déclare la liste des produits
const produits = [
  { title: "Coca", prix: 100, description: "boisson" },
  { title: "Jean", prix: 4000, description: "vêtement" },
  { title: "Audi A4", prix: 100000000, description: "voiture" },
  { title: "Coca Cola", prix: 100000000, description: "boisson" },
];

// On met la liste des produits filtré par défaut avec la valeur de la liste de tout les produits
var filteredProduits = produits;

// On récupére une div pour afficher les infos des produits
const produitsDiv = document.getElementById("produits");

// Function qui permet de récupérer le mot cherché dans l'input
function Search(word) {
  // On filtre la liste des produits par le mot cherché et on remplace la liste des produtis filtrés par les produits trouvés
  filteredProduits = produits.filter(
    (produit) =>
      produit.title.toLowerCase().includes(word.toLowerCase()) ||
      produit.description.toLowerCase().includes(word.toLowerCase())
  );

  console.log(filteredProduits);

  // Pour chaque élement de la liste, affiche ses produits
  for (let i = 0; i < filteredProduits.length; i++) {
    produitsDiv.innerHTML += `
<div style="display:flex; flex-direction:column; align-items:center; background:gray; margin-top:10vh;">
  <h2>${filteredProduits[i].title}</h2>
  <h6>${filteredProduits[i].prix}</h6>
  <p>${filteredProduits[i].description}</p>
</div>
`;
  }
}
