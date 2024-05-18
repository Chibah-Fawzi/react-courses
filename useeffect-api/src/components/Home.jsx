export default function HomePage({ data, setUsername, error }) {
  return (
    <div>
      <form>
        <label>username</label>
        <input
          // On récupére ce que l'utilisateur écris dans l'input, et on la store dans la state "username"
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          id="username"
        />

        {/* Condition ternaire : 
        Si la state "error" est true ? 
        Affiche le paragraphe d'erreur : 
        Sinon affiche le paragraphe du succés  
        */}

        {error ? (
          <p style={{ color: "red" }}>
            Le username doit être minmum 10 caractére
          </p>
        ) : (
          <p style={{ color: "green" }}>Le username est correcte</p>
        )}
      </form>

      <section>
        {/* 9. On affiche la liste données "data" avec la function JS par défaut map, qui pour chaque élement de la liste crée une div qui contient : 
        - le titre 
        - l'id du post 
        - l'id du user 
        - le contenu du post */}

        {data?.map((element, index) => (
          <div key={index} className="card">
            <h1>
              {element.id} - {element.title}
            </h1>
            <h3>{element.userId}</h3>
            <p>{element.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
