import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Loja from './components/Loja';
import Carrinho from './components/Carrinho';

function App() {

  
  const [listCart, setListCart] = useState([]);
  
  function addItemToCart(itemId){
    var res = document.getElementById(`${itemId}`);
    var num = Number(res.innerHTML);
    res.innerHTML = num + 1;
    setListCart(currItem => {
      if(currItem.find(item => item.id === itemId)== null){
        return [...currItem, {id: itemId, quant: num+1}];
      }else{
        return currItem.map(item => {
          if(item.id === itemId){
            return {...item, quant: item.quant + 1}
          }else{
            return item
          }
        })
      }
    })    
    // console.log(listCart); // bug, delay de 1 quant
  };

  function rmItemFromCart(itemId){
    var res = document.getElementById(`${itemId}`)
    var num = Number(res.innerHTML)
    if (num <= 0){
      num = 0
    } else {
      num = num - 1
    }
    res.innerHTML = num;
    setListCart(currItem => {
      if(currItem.find(item => item.id === itemId)?.quant === 1){
        return currItem.filter(item => item.id !== itemId);
      }else{
        return currItem.map(item => {
          if(item.id === itemId){
            return {...item, quant:item.quant - 1};
          }else{
            return item;
          }
        });
      }
    });
  }



  /* ------------------------ barra de pesquisa ------------------------ */
 
  // salva o item pesquisado, se ouver, ou todos os itens, se nao houver pesquisa
  const [items, setItems] = useState([]);
  
  // roda apenas uma vez inicialmente
  useEffect(() => {
    fetchData();
  }, []);

  // funcao que pega os valores da barra de pesquisa e chama a api(GET)
  async function fetchData(search){
    try {
      let res
      if(search == null){
        res = await axios.get(`http://localhost:8080/items/`);
      } else {
        res = await axios.get(`http://localhost:8080/items/${search}`);
      }
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  }
 
  /* ------------------------------------------------------------------------ */

  return (
  <>
      <Header searchItems={fetchData}/>
      <Loja addToCart={addItemToCart} rmFromCart={rmItemFromCart} items={items}/>
      {/* {console.log(listCart)} */}
      <Carrinho carrinho={listCart}/>
  </>
  )
}

export default App