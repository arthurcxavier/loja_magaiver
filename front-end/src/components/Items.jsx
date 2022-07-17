import React from 'react'

function ItemCard({item, addToCart, rmFromCart, getQuantity}) {
  var quantity = getQuantity(item);
  return (
    <div className='itemCard'>
        <img src={item.image} alt="Foto produto" />
        <div className='item-card-texts'>
          <h2>{item.product_name}</h2>
          <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
        </div>
        
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          {quantity === 0 ? (
            <button onClick={() => addToCart(item)} className="button-add-to-cart">Adicione ao carrinho</button>
          ) : (
            <div className='item-card-buttons'>
              <button onClick={() => rmFromCart(item)} className="button-cart">-</button>
              <div id={item.uuid}>{quantity}</div>
              <button onClick={() => addToCart(item)} className="button-cart">+</button>
            </div>
          )}
        </div>
    </div>
  )
}

export default ItemCard