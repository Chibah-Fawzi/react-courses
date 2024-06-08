import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./Products";
import Home from "./Home";
import { ContactUs } from "./Contact";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_PROJECT,
  import.meta.env.VITE_APP_SUPABASE_API_KEY
);
export default function App() {
  const [produits, setProduits] = useState([]);
  const [supabaseData, setSupabaseData] = useState([]);
  const [session, setSession] = useState(null);

  async function getProducts() {
    const { data, error } = await supabase.from("products").select();
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setSupabaseData(data);
    }
  }

  function getData() {
    fetch("http://localhost:3000/produits")
      .then((response) => response.json())
      .then((json) => setProduits(json.produits))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      setSession(null); // Clear session state on successful sign out
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="auth">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <span>
            <Link to="/home">Home</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
          <span>
            <Link to="/contact">Contact Us</Link>
          </span>
          <button onClick={signOut}>Sign Out</button>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={ContactUs} />
          <Route
            path="/"
            render={(props) => <Home produits={supabaseData} />}
          />
        </Switch>
      </div>
    );
  }
}
