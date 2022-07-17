import React, {useState} from 'react';

function Header({searchItems, carrinho}) {
  const [pesq, setPesq] = useState('')
  
  const totalPrice = carrinho.reduce((acc, current) => acc + (current.price * current.quant), 0)

  function savePesq(){
      searchItems(pesq)
  }

  return (
    <div id="header">
        <img id="logo" src="../../public/imgs/LogoMagaiver.png" alt="Logo" />
        <h3 id="total">Total: R$ {totalPrice.toFixed(2).replace('.', ',')} </h3>
    </div>
  )
}

export default Header