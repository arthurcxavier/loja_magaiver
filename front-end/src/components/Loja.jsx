import React, { useEffect, useState } from 'react'
import ItemCard from './Items'

function Loja({addToCart, rmFromCart, items}) {

  return (
    <div>
       <div>
           {items.map((item, index) => (
                <ItemCard key={index} className="" item={item} addToCart={addToCart} rmFromCart={rmFromCart} />
           ))}
        </div> 
    </div>
  )
}

export default Loja