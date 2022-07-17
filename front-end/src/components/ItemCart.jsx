import React from "react";

function ItemCart({ item }) {
    return (
        <div id="padding_list">
            <li id="list">
                <h3>{item.name}</h3>
                <p>R$ {item.price}</p>
                <span>
                    <p>{item.quant} {item.quant === 1 ? "item" : "items"}</p>
                    <p>R$ {(item.price * item.quant).toFixed(2).replace('.' , ',')}</p>
                </span>
            </li>
        </div>
    );
};

export default ItemCart;