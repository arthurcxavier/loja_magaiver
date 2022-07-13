import { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(txt){
        this.setState({search: txt.target.value});
    }

    render(){
        return(
            <>
                <header>
                    <div><img src="../public/imgs/LogoMagaiver.png" alt="Logo site" /></div>
                    <div><input type="text" id="txt-search" placeholder="Procure o seu produto" onChange={this.handleChange}/></div>
                </header>
            </>
        )
    }
}

export default Header