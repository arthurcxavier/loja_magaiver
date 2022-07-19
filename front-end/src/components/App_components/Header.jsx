import React, {useState} from 'react';

function Header({searchItems, carrinho}) {
  /*const [pesq, setPesq] = useState('')*/

  /*function savePesq(){
      searchItems(pesq)
  }*/

  const totalPrice = carrinho.reduce((acc, current) => acc + (current.price * current.quant), 0);

  return (
    <div id="header">
        <img id="logo" src="../../public/imgs/LogoMagaiver.png" alt="Logo" />
        <h3 id="total">Total: R$ {totalPrice.toFixed(2).replace('.', ',')} </h3>
    </div>
  );
}

export default Header;