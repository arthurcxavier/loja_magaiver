import React from 'react'

function ItemCard({item, addToCart, rmFromCart}) {
  return (
    <div className='itemCard'>
        <img src={item.image} alt="Foto produto" />
        <div className='item-card-texts'>
          <h2>{item.product_name}</h2>
          <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
        </div>
        <div className='item-card-buttons'>
          <button onClick={() => rmFromCart(item)} className="button-cart">-</button>
          <div id={item.uuid}>0</div>
          <button onClick={() => addToCart(item)} className="button-cart">+</button>
        </div>
    </div>
  )
}

export default ItemCard