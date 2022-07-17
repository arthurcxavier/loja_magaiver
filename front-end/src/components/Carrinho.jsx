import React from "react";
import Button from "./Button";
import ItemCart from "./ItemCart";

function Carrinho({ carrinho, setCart }){
    
    return(
        <>
            <ul>
                {carrinho.map((cartItem, index) => (
                    <ItemCart key={index} item={cartItem}/>
                ))}
            </ul>
            <Button carrinho={carrinho} setCart={setCart}/>
        </>
    )
}

export default Carrinho;