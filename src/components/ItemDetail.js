import react from "react";
import Image from "./assets/monstera.jpg";
import ItemCount from "./ItemCount";
import "./ItemDetails.css"
import {useState} from "react";

function ItemDetails ({data1}) {
    const [infoProduct, setInfoProduct] = useState([]);

    setTimeout(() => {

        const users = new Promise((resolve) => {
        resolve(true);
    })
        users.then( () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data1 => setInfoProduct(data1))
    })
    }, 2000); 


    return (
            <div className="detailContainer">
                <div data={infoProduct}>
                    <h2> ID: {infoProduct.id}</h2>
                    <img src={Image}></img>
                    <p>{infoProduct.title}</p>
                    <p> $2500 </p>
                </div>
                <ItemCount/>
            </div>
        )
}


export default ItemDetails;