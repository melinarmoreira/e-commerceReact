import React, { createContext, useState } from "react";


export const ItemsContext = createContext();
export const ItemsProvider = ({ children }) => {
  let [carrito, setCarrito] = useState([]);
  let [counter, setCounter] = useState(0);
  let [itemsInCart, setItemsInCart] = useState(false);





  return (
    <ItemsContext.Provider
      value={[carrito, setCarrito, counter, setCounter, itemsInCart, setItemsInCart]}
    >
      {children}
    </ItemsContext.Provider>
  );
};
