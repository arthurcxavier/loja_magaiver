import React from "react";
import Button from "./Button";
import ItemCart from "./ItemCart";

function Carrinho({ carrinho, setCart }){
    var clear_button = document.getElementById('clear_button');
    var buybtn = document.getElementById('buy-btn');
    function ClearCart() {
        buybtn.classList.add('close');
        clear_button.classList.add('close_clear')
        setCart([])
    }

    return(
        <footer>
            <div id="div_clear_button">
                <button onClick={ClearCart} className="close_clear" id="clear_button">X</button>
            </div>
            <ul id="ul">
                {carrinho.map((cartItem, index) => (
                    <ItemCart key={index} item={cartItem}/>
                ))}
            </ul>
            <div id="button_carrinho">
                <Button carrinho={carrinho} setCart={setCart}/>
            </div>
        </footer>
    )
}

export default Carrinho;