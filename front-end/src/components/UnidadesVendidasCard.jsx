import React from 'react'

function UnidadesVendidasCard({vendas}) {
  let sum = 0
  vendas.map(item => (
    sum += item.quantity
  ));

  return (
    <div id='sold-units'>
        <h2>UNIDADES VENDIDAS</h2>
        <p>{sum} unidades</p>
    </div>
  );
}

export default UnidadesVendidasCard;