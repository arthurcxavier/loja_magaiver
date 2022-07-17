import React from "react";
import axios from "axios";
import { useState } from "react";

function Button({ carrinho, setCart }) {

    const [list, setList] = useState([]);
    function buy() {
        var num;

        carrinho.map( async item =>  {
            const get = await axios.get(`http://localhost:8080/items/${item.id}`)
            const {quantity} = get.data
            num = quantity - item.quant;
            if (num<0){
                alert(`Sem ${item.name} no estoque, tente novamente!`);
                setList([...list, item.id]);
            } else {
                await axios.patch(`http://localhost:8080/items/${item.id}`, {
                    product_name: item.name,
                    quantity: quantity - item.quant,
                    price: item.price
                });
            }
        });
        //console.log(list)
        //console.log(list.length)
        if(list.length > 0){
            setCart(currItem => {
                return currItem.filter(obj => {
                    list.map(itemList => {
                        itemList == obj.id
                    })
                })
            })
        } else {
            setCart([]);
            alert('Seu pedido foi realizado com sucesso! Obrigado!');
        }
    }

    return (
        <button id='buy-btn' className="close" onClick={() => buy()}>COMPRAR</button>
    ) 
}

export default Button;