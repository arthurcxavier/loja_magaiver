import React from 'react'

function DadosCard({vendas}) {
  let sum = 0
  vendas.map(item => (
    sum += item.price
  ));
  return (
    <div id='profit' className='itemCard'>
        <h2>LUCRO BRUTO</h2>
        <p>R$ {sum.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}

export default DadosCard;