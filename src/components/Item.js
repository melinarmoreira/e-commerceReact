// import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "./assets/monstera.jpg"
import "./Item.css"



const Item = ({data}) => {

    return(
        <div className="itemCard">
            <h2>Plant: {data.id}</h2>
            <img src={Image} className="imgCard" alt="monstera"/>
            <p className="speciesCard">Species:  {data.name}</p>
            <p className="descriptionCard">Description: {data.body}</p>
        </div>
    )
}

export default Item;