import React from 'react'
import Perfil from "../../assets/imagem1.png"

import "./Profile.css"

function Profile() {
    return (
        <div className='Perfil'>
            <img src={Perfil} alt="Perfil" />
        </div>
    )
}

export default Profile