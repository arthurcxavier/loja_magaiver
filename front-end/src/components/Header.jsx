import { Component } from "react";
import '../styles/Header.css';

export async function showEvent(){
    var result = document.getElementById('result');
    var input = document.getElementById('text-search');
    result.innerHTML = ''

    try {
      const response = await fetch(`http://localhost:8080/items/${input.value}`);

      response.json().then(function(data) {
        for (let item of data) {
            result.innerHTML += `
            <div class='products'>
                <img src="${item.image}" alt="Foto produto"/>
                <p>${item.product_name}</p><br>
                <p>${item.price}</p><br>
                <p>${item.quantity}</p>
            </div>`
          }
      });
    } catch (error) {
      console.log(error);
    }
}

class Header extends Component {
    
    keyPressed(event){
        if(event.code === 'Enter'){
            showEvent();
        }
    }

    render(){
        return(
            <>
                <header>
                    <div><img id="logo" src="../public/imgs/LogoMagaiver.png" alt="Logo site" /></div>
                    <div><input type="text" id="text-search" placeholder="Procure o seu produto" onKeyPress={this.keyPressed}/></div>
                </header>
            </>
        )
    }
}

export default Header