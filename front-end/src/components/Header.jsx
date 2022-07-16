import React, {useState} from 'react'

function Header({searchItems}) {
    const [pesq, setPesq] = useState('')

    function savePesq(){
        searchItems(pesq)
    }

  return (
    <div>
        <img src="../../public/imgs/LogoMagaiver.png" alt="Logo" />
        <div>
            <input type="text" name="search-bar" id="search-bar" onChange={e => setPesq(e.target.value)}/>
            <button id='search-btn' onClick={savePesq}>Pesquisa</button>
        </div>
    </div>
  )
}

export default Header