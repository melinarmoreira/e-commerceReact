
import "./App.css";
import NavBar from "./components/NavBar";
// import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
          <ItemListContainer greeting="Este es mi ItemListContainer"/>

    </div>
  );
}

export default App;
