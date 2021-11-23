import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  let [carrito, setCarrito] = useState([]);
  let [counter, setCounter] = useState(0);
  let [itemsInCart, setItemsInCart] = useState(false);
  let [infoProd, setInfoProd] = useState([]);

  useEffect(() => {
    const docs = [];
    const dataReq = async () => {
      const dataFirebase = await getDocs(collection(db, "products"));
      dataFirebase.forEach((element) => {
        docs.push({ ...element.data() });
      });
      setInfoProd(docs);
    };
    dataReq();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        carrito,
        setCarrito,
        counter,
        setCounter,
        itemsInCart,
        setItemsInCart,
        infoProd,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
