import React from 'react'
import './card.css'

import { IoLogoReact,IoLogoHtml5,IoLogoCss3,IoLogoJavascript,
 } from 'react-icons/io5'
function Card() {
  return (
    <div className='ConteudoCard' >
        <ul>
            <li> 
                <IoLogoReact/>
                <p>JNADSFKJBADFKJABDSF</p>
            </li>

            <li>
                <IoLogoHtml5 style={{}}/>
                <p>JNADSFKJBADFKJABDSF</p>
            </li>
            <li>
                 <IoLogoCss3/>
                 <p>JNADSFKJBADFKJABDSF</p>
            </li>
            <li>
                <IoLogoJavascript/>
                <p>JNADSFKJBADFKJABDSF</p>
        
            </li>
        </ul>
    </div>
  )
}

export default Card