import React, { Fragment, useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import HeaderVendas from '../components/HeaderVendas'
import '../styles/Header.css'
import '../styles/Dashboard.css'



function Vendas() {

  const [vendas, setVendas] = useState([]);
  
  // roda apenas uma vez inicialmente
  useEffect(() => {
    fetchData();
  }, []);

  // funcao que chama a api(GET)
  async function fetchData(){
    try {
      res = await axios.get(`http://localhost:8081/vendas`);
      setVendas(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
        <HeaderVendas /> {/*Por nao estar sendo utiliza um contexto global, foi necessario criar um outro header para a segunda pagina*/}
        <Dashboard vendas={vendas}/>
    </Fragment>
  )
}

export default Vendas