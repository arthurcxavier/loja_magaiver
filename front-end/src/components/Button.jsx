import React from "react";
import axios from "axios";

function Button() {
    function buy() {
        const update = axios.put(`http://localhost:8080/items/`);
    }

    return (
        <button onClick={buy}>COMPRAR</button>
    ) 
}

export default Button;