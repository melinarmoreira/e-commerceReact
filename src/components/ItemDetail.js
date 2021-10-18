
import Image from "./assets/monstera.jpg";
import ItemCount from "./ItemCount";
import "./ItemDetails.css"
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";

const ItemDetail = () => {

    const {id} = useParams()
    console.log(id);
    
    
    // let productsID = match.params.id;
    const [infoProduct, setInfoProduct] = useState([]);

    useEffect (() => {

        const users = new Promise((resolve) => {
        resolve(true);
    })
        users.then(() => {
            //Aca no sé como poner el link para que me lleve al ID
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data1 => setInfoProduct(data1));
            // console.log(infoProduct)
    })
    }, [id]);

    return (
            <div className="detailContainer" >
                        <div key={infoProduct.id} data={infoProduct}>
                        <h2> ID: {infoProduct.id}</h2>
                        <img src={Image} alt="img monstera"></img>
                        <p>{infoProduct.username}</p>
                        <p> $2500 </p>
                <ItemCount/>
            </div>
            </div>
        )
}


export default ItemDetail;