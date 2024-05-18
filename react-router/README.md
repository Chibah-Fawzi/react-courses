# How to add react router into react project:

- Installer la librairie react-router-dom@5.3.4:
  `npm i react-router-dom@5.3.4`
- Main.jsx : <BrowserRouter> Comme parent de <App/>
  `<BrowserRouter>
	<App/>
</BrowserRouter>`

- Configurer les Routes dans <App/>
  Example:
  // On déclares les routes/chemins de notre project:
  <Switch>
  // Déclarer un chemin login qui n'as pas de props
  <Route path="/login" component={Login} />
  <Route path="/produits" component={Produits} />
  // Déclarer un chemin Home qui posséde des props
  <Route
  path="/"
  render={(props) => <Home {...props} myProps={myProps} />}
  />
  </Switch>

- Créer un composant navbar pour naviguer enter les chemins.
- Dans le navbar ajouter des liens contenu dans des <Link>
- Example:

```<nav>
<Link to="/">Home</Link>
<Link to="/produits">Produits</Link>
<Link to="/login">Login</Link>
  </nav>
```
