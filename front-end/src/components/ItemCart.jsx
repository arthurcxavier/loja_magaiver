import React from "react";

function ItemCart({ item }) {
    return (
        <div id="padding_list">
        <li id="list">
            <h3>{item.name}</h3>
            <p>R$ {item.price}</p>
            <span>
                <p>{item.quant} items</p>
                <p>R$ {item.price * item.quant}</p>
            </span>
        </li>
        </div>
    );
};

export default ItemCart;