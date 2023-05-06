import React from 'react'
import './Content.css'
import { IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'


function Content({children }) {

    return (
        <div className='Conteudo'>
            <div className='Conteudo-Principal'>
                <span className='Lista'>
                    {children}
                </span>
            </div>
        </div>
    )
}

export default Content