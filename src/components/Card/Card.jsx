import React from 'react'
import './Card.css'
import Conteudo_card from './Card/Card'
function Card() {
  return (
    <div className='Card'>
         <div className='Card-Content'>
            <h1>Tecnologias</h1>
         </div>
         <Conteudo_card/>

    </div>
  )
}

export default Card