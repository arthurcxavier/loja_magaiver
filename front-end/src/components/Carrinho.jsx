import React from "react";
import ItemCart from "./ItemCart";

function Carrinho({ carrinho }){
    
    return(
        <ul>
            {carrinho.map((cartItem, index) => (
                <ItemCart key={index} item={cartItem}/>
            ))}
        </ul>
    )
}

export default Carrinho;