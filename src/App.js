import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemsProvider } from "./components/CartContext";

//Views
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./views/Home";
import Cart from "./components/Cart";
// import React, { useState, useEffect }from "react"
// import { collection, getDocs } from "firebase/firestore"
// import { db } from "./firebase";

function App() {
  // const [productsData, setProductsData] = useState([])
  // console.log(productsData)
  //  useEffect(() => {
  //   const docs = [];
  //    const dataReq = async() => {
  //      const dataFirebase = await getDocs(collection(db, "products"));
  //      dataFirebase.forEach(element => {
  //       // console.log(element.data())
  //       docs.push({...element.data()})
  //      });
  //      setProductsData(docs);
  //    }
  //    dataReq();
  //  }, [])

  return (
    <ItemsProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route path="/detail/:id1" component={ItemDetailContainer} />
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
