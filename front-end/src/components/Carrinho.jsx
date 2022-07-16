import React from "react";
import Button from "./Button";
import ItemCart from "./ItemCart";

function Carrinho({ carrinho }){
    
    return(
        <>
            <ul>
                {carrinho.map((cartItem, index) => (
                    <ItemCart key={index} item={cartItem}/>
                ))}
            </ul>
            <Button/>
        </>
    )
}

export default Carrinho;