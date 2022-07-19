import React from 'react'

function UnidadesVendidasCard({vendas}) {
  //soma a quantidade de itens vendidos
  let sum = 0
  vendas.map(item => (
    sum += item.quantity
  ));

  return (
    <div id='sold-units' className='itemCard'>
        <h2>UNIDADES VENDIDAS</h2>
        <p>{sum} unidades</p>
    </div>
  );
}

export default UnidadesVendidasCard;