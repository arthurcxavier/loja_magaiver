import React, { useEffect, useState } from 'react'
import ItemCard from './Items'
import axios from 'axios'

function Loja({addToCart, rmFromCart}) {

    const [items, setItems] = useState([]);
    const [cart, setCartItems] = useState([]);

    useEffect( () => {
        async function fetchData(){
            try {
                const res = await axios.get('http://localhost:8080/items/');
                setItems(res.data);
                /*items.map((item) => (
                    setCartItems(...cart, {id: item.product_name, qty: 0})
                ))
                console.log(cart)*/
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        
    }, [])

    

  return (
    <div>
       <div>
           {items.map((item) => (
                <ItemCard item={item} addToCart={addToCart} rmFromCart={rmFromCart} />
           ))} 
        </div> 
    </div>
  )
}

export default Loja