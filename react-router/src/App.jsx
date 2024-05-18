import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Produits from "./components/Produits";
import Navbar from "./components/Navbar";
function App() {
  var myProps = "Omar";

  return (
    <>
      {/* 5. On ajoute une navbar qui navigue entres les chemins déclarés */}
      <Navbar />
      {/* 2. On déclares les routes/chemins de notre project: */}
      <Switch>
        {/* 3. Déclarer un chemin login qui n'as pas de props */}
        <Route path="/login" component={Login} />
        <Route path="/produits" component={Produits} />

        {/* 4. Déclarer un chemin Home qui posséde des props */}
        <Route
          path="/"
          render={(props) => <Home {...props} myProps={myProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
