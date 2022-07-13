import { Component } from "react";

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
            const response = await fetch(`http://localhost:8080/items/${this.state.text}`);

            response.json().then(function(data) {
                for (let item of data) {
                    result.innerHTML += `
                    <div>
                        <img src="${item.image}" alt="Foto produto"/>
                        <p>${item.name}</p><br>
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
            <>
                <header>
                    <div><img src="../public/imgs/LogoMagaiver.png" alt="Logo site" /></div>
                    <div>
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
            </>
        )
    }
}

export default App