import React from 'react'

function ItemCard({item, addToCart, rmFromCart}) {
  return (
    <div>
        <img src={item.image} alt="Foto produto" />
        <h2>{item.product_name}</h2>
        <p>{item.price}</p>
        <button onClick={() => addToCart()}>+</button>
        <div id='resultado'>0</div>
        <button onClick={() => rmFromCart()}>-</button>
    </div>
  )
}

export default ItemCard