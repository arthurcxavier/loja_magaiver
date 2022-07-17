import React, {useState} from 'react';

function Header({searchItems}) {
    const [pesq, setPesq] = useState('');

    function savePesq(){
        searchItems(pesq)
    }

  return (
    <div id="header">
        <img id="logo" src="../../public/imgs/LogoMagaiver.png" alt="Logo" />
        <h3 id="total">Total: R$</h3>
    </div>
  )
}

export default Header