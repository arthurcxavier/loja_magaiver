import React, { useEffect, useState, Fragment } from 'react'
import ItemCard from './Items'

function Loja({addToCart, rmFromCart, getQuantity, items}) {
  return (
    <Fragment>
      <h1>Produtos disponíveis</h1>
      <main>
        <section className='items-section'>
            {items.map((item, index) => (
                  <ItemCard key={index} item={item} addToCart={addToCart} rmFromCart={rmFromCart} getQuantity={getQuantity} />
            ))}
          </section> 
      </main>
    </Fragment>
  )
}

export default Loja