import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemsProvider } from "./components/CartContext";

//Views
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./views/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route path="/detail/:id" component={ItemDetailContainer} />
            <Route path="/products" component={ItemListContainer} />
            <Route path="/Home" component={Home} />
            <Route path="/Cart" component={Cart} />
            <Route path="/" exact oomponent={Home} />
          </Switch>
        </div>
      </Router>
    </ItemsProvider>
  );
}

export default App;
