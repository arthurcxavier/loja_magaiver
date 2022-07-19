import React from 'react'

function RowTable({item}){
    return(
        <tr>
            <td>{item.product_name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.date}</td>
            <td>{item.token}</td>
        </tr>
    );
}

export default RowTable;