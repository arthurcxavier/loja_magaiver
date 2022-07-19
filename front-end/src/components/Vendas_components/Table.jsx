import React from 'react'

import RowTable from './RowTable'

function Table({vendas}) {
  //mostra todos os produtos vendidos
  return (
    <div id='table' className='itemCard'>
        <h2>VENDAS</h2>
        <table>
            <tr>
              <th>PRODUTO</th>
              <th>PREÇO</th>
              <th>QUANTIDADE</th>
              <th>DATA</th>
              <th>NÚMERO DA VENDA</th>
            </tr>
            
            {vendas.map((item, index) => (
              <RowTable key={index} item={item}/>
            ))}
        </table>
    </div>
  );
}

export default Table;