import React from "react";

function ItemCart({ item }) {
    return (
        <li>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <span>{item.quant}</span>
            <p>{item.price * item.quant}</p>
        </li>
    );
};

export default ItemCart;