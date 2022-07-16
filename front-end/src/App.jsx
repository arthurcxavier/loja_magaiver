import React, {useState} from 'react'
import Header from './components/Header'
import Loja from './components/Loja'
import axios from 'axios';
import { useEffect } from 'react';




function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  function addItemToCart(){
    var res = document.getElementById('resultado')
    var num = Number(res.innerHTML)
    res.innerHTML = num + 1   
  }

  function rmItemFromCart(){
    var res = document.getElementById('resultado')
    var num = Number(res.innerHTML)
    if (num <= 0){
      res.innerHTML = 0
    } else {
      res.innerHTML = num - 1
    }
  }


    async function fetchData(search){
        try {
            let res
            if(search == null){
                res = await axios.get(`http://localhost:8080/items/`);
            } else {
                res = await axios.get(`http://localhost:8080/items/${search}`);
            }
            setItems(res.data);
            /*items.map((item) => (
                setCartItems(...cart, {id: item.product_name, qty: 0})
            ))
            console.log(cart)*/
        } catch (error) {
            console.log(error);
        }
    }
    


  function searchItems(search){
    fetchData(search);
  }

  

  return (
  <>
      <Header searchItems={searchItems}/>
      <Loja addToCart={addItemToCart} rmFromCart={rmItemFromCart} items={items}/>
    
  </>
  )
}

export default App