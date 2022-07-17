import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Loja from './components/Loja';
import Carrinho from './components/Carrinho';
import './styles/Loja.css'
import './styles/Header.css'
import './styles/Carrinho.css'

function App() {

  
  const [listCart, setListCart] = useState([]);
  
  function addItemToCart(item){
    var buybtn = document.getElementById('buy-btn');
    var num = getItemQuantity(item);
    
    if(item.quantity > num){
      setListCart(currItem => {
        if(currItem.find(obj => obj.id === item.uuid)== null){
          buybtn.classList.remove('close');
          return [...currItem, {id: item.uuid, name: item.product_name, quant: (num+1), price: item.price}];
        }else{
          return currItem.map(obj => {
            if(obj.id === item.uuid){
              return {...obj, quant: obj.quant + 1}
            }else{
              return obj
            }
          })
        }
      })
    }
  }

  function rmItemFromCart(item){
    var buybtn = document.getElementById('buy-btn');
    var num = getItemQuantity(item);
    if (num <= 0){
      num = 0
    } else {
      num = num - 1;
    }
    setListCart(currItem => {
      if(currItem.find(obj => obj.id === item.uuid)?.quant === 1){
        if(listCart.length === 1){
          buybtn.classList.add('close');
        }
        return currItem.filter(obj => obj.id !== item.uuid);
      }else{
        return currItem.map(obj => {
          if(obj.id === item.uuid){
            return {...obj, quant: obj.quant - 1};
          }else{
            return obj;
          }
        });
      }
    });
  }

  function getItemQuantity(item){
    if(listCart.find(obj => obj.id === item.uuid)?.quant == undefined){
      return 0
    } else {
      return listCart.find(obj => obj.id === item.uuid)?.quant
    }
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
      <Header searchItems={fetchData} carrinho={listCart} />
      <Loja addToCart={addItemToCart} rmFromCart={rmItemFromCart} getQuantity={getItemQuantity} items={items}/>
      <Carrinho carrinho={listCart} setCart={setListCart}/>
  </>
  )
}

export default App