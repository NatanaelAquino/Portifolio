import React from 'react'
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import './Menu.css'


function Menu() {
  return (
    <div className='Menu'>
      <div className='Conteudo_Menu'>
        <ul>
          <li><a href="">Menu</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Projeto</a></li>
          <li><a href="">Contatos</a></li>
        </ul>
        <span>
          <li><IoLogoInstagram /></li>
          <li><IoLogoFacebook /></li>
          <li><IoLogoLinkedin /></li>
          <li><IoLogoDiscord /></li>
          <li><IoLogoGithub /></li>
        </span>
      </div>

    </div>
  )
}

export default Menu