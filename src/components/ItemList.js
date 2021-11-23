import Item from "./Item";
import { useContext } from "react";
import "./ItemList.css";
import { ItemsContext } from "./CartContext";

const ItemList = () => {
  const { infoProd } = useContext(ItemsContext);

  return (
    <div className="containerItem">
      {infoProd.map((info) => {
        return (
          <div key={info.id1}>
            <Item data={info} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
