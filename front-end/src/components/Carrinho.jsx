import React from "react";

function Carrinho({ carrinho }){
    
    return(
        <ul>
            {/* {carrinho.map((item) => (<h1>{item.id} + {item.quant}</h1>))} */}
            {carrinho.map((cartItem) => (
                <li>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.price}</p>
                    <span>{cartItem.quant}</span>
                    <p>{cartItem.price * cartItem.quant}</p>
                </li>
            ))}
        </ul>
    )
}

export default Carrinho;