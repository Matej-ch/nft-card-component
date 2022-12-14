import React from 'react'
import ReactDOM from 'react-dom/client'
import NftPreviewCard from './NftPreviewCard'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NftPreviewCard title='Equilibrium #3429'
                    description="Our Equilibrium collection promotes balance and calm"
                    price={0.041}/>
  </React.StrictMode>,
)
