import React from 'react'
import LucrosCard from './LucrosCard'
import Table from './Table'
import UnidadesVendidasCard from './UnidadesVendidasCard'

function Dashboard({vendas}) {
  return (
    <main>
        <section className='dashboard-section'>
            <LucrosCard vendas={vendas}/>
            <UnidadesVendidasCard vendas={vendas}/>
            <Table vendas={vendas}/>
        </section>
    </main>
  )
}

export default Dashboard