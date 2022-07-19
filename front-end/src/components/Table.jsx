import React from 'react'

function Table() {
  return (
    <div id='table' className='itemCard'>
        <h2>VENDAS</h2>
        <table>
            <tr>
                <th>TOKEN</th>
                <th>PRODUTO</th>
                <th>UNIDADES</th>
                <th>VALOR</th>
                <th>DATA</th>
            </tr>
            <tr>
                <td>10254</td>
                <td>Paçoca</td>
                <td>10</td>
                <td>R$ 5,00</td>
                <td>18-07-2022</td>
            </tr>
        </table>
    </div>
  )
}

export default Table