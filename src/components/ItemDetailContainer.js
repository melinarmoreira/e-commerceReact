import React from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetail";


const ItemDetailContainer = () => {

return (
    <div>
        <ItemDetails/>
    </div>
)

//     const [infoUsers, setInfoUsers] = useState([]);

// setTimeout(() => {
//     const users = new Promise((resolve) => {
//         resolve(true);
//     })
//     users.then( () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data1 => setInfoUsers(data1))
//     })
// }, 2000); 

// }

// export default function ItemDetailContainer() {
//     return (
//             <div className="itemCard">
//                 <h2>Plant: {data1.id}</h2>
//                 <img src={Image} className="imgCard" alt="monstera"/>
//                 <p className="speciesCard">Species:  {data1.name}</p>
//                 <p className="descriptionCard">Description: {data1.body}</p>
//             </div>
//     )
}

export default ItemDetailContainer;