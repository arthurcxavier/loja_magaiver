import React from 'react'

function Header() {
  return (
    <div>
        <img src="../../public/imgs/LogoMagaiver.png" alt="Logo" />
        <div>
            <input type="text" name="seach-bar" id="seach-bar" />
            <button id='search-btn'>Pesquisa</button>
        </div>
    </div>
  )
}

export default Header