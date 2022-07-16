import React from 'react'
import Header from './components/Header'
import Loja from './components/Loja'

function App() {

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

  return (
  <>
    <Header />
    <Loja addToCart={addItemToCart} rmFromCart={rmItemFromCart} />

  </>
  )
}

export default App