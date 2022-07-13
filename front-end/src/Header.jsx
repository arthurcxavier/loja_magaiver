import { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }

    }


    render(){
        return(
            <>
                <header>
                    <div><img src="../public/imgs/LogoMagaiver.png" alt="Logo site" /></div>
                    <div><input type="text" /></div>
                </header>
            </>
        )
    }
}

export default Header