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
            <div id="button_carrinho">
                <Button carrinho={carrinho} setCart={setCart}/>
            </div>
        </>
    )
}

export default Carrinho;