import React from "react";
import axios from "axios";
import { useState } from "react";

const HOST_VENDAS = `http://localhost:8081`;

function Button({ carrinho, setCart }) {
    var buybtn = document.getElementById('buy-btn');
    var clear_button = document.getElementById('clear_button');

    const [list, setList] = useState([]);
    function buy() {
        buybtn.classList.add('close'); // retirar a classe close do botao para sumir
        clear_button.classList.add('close_clear');

        var num;
        var tokenFake =  Math.floor(Math.random() * 20000 + 1000);

        carrinho.map( async item =>  {
            const get = await axios.get(`http://localhost:8080/item/${item.id}`)
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
                // add comprar na tabela de vendas
                await axios.post(HOST_VENDAS, {
                    product_name: item.name,
                    price: item.price,
                    quantity: item.quant,
                    token: tokenFake
                });
            }
        });
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