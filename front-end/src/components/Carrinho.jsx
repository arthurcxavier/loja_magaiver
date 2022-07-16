import React from "react";

function Carrinho({ carrinho }){
    
    return(
        <ul>
            {/* {carrinho.map((item) => (<h1>{item.id} + {item.quant}</h1>))} */}
            {carrinho.map((cartItem) => (
                <li>
                    <h3>{cartItem.id}</h3>
                    <span>{cartItem.quant}</span>
                </li>
            ))}
        </ul>
    )
}

export default Carrinho;