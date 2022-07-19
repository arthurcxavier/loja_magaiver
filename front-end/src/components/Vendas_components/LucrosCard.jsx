import React from 'react'

function DadosCard({vendas}) {
  //soma o valor de todos os itens vendidos
  let sum = 0
  vendas.map(item => (
    sum += item.price * item.quantity
  ));
  return (
    <div id='profit' className='itemCard'>
        <h2>LUCRO BRUTO</h2>
        <p>R$ {sum.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}

export default DadosCard;