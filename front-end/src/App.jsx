import { Component } from "react";
import './Header.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.showEvent = this.showEvent.bind(this);
    }

    handleChange(txt){
        this.setState({search: txt.target.value});
        console.log(this.state.search);
    }

    async showEvent(){
        const result = document.getElementById('result');
        result.innerHTML = ''
        try {
            const response = await fetch(`http://localhost:8080/items/${this.state.search}`);

            response.json().then(function(data) {
                for (let item of data) {
                    result.innerHTML += `
                    <div>
                        <img src="${item.image}" alt="Foto produto"/>
                        <p>${item.product_name}</p><br>
                        <p>${item.price}</p><br>
                        <p>${item.quantity}</p>
                    </div>
                    `
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async showItems(){
      const result = document.getElementById('result');
      result.innerHTML = ''
      try {
          const response = await fetch(`http://localhost:8080/items`);

          response.json().then(function(data) {
              for (let item of data) {
                  result.innerHTML += `
                  <div id="item">
                      <img id="product_image" src="${item.image}" alt="Foto produto"/>
                      <p>${item.product_name}</p><br>
                      <p>${item.price}</p><br>
                      <p>${item.quantity}</p>
                  </div>
                  `
              }
          });
      } catch (error) {
          console.log(error);
      }
  }

    render(){
        return(
            <div onLoad={this.showItems}>
                <header>
                    <div><img id="logo" src="../public/imgs/LogoMagaiver.png" alt="Logo site" /></div>
                    <div id="search">
                        <input type="text" id="txt-search" placeholder="Procure o seu produto" onChange={this.handleChange}/>
                        <button id="search-btn" onClick={this.showEvent}>🔍</button>
                    </div>
                </header>
                <main>
                <div>
                  <h1>Itens da loja</h1>
                  <div id='result'></div>
                </div>
              </main>
            </div>
        )
    }
}

export default App