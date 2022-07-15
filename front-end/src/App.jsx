import { Component } from "react";
import './styles/Header.css';

class App extends Component {
    render(){
        return(
            <div>
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