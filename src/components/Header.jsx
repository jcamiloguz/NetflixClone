import React from 'react'
import '../assets/styles/components/Header.scss'
import Logo from '../assets/static/Netflix_Logo.png'
import userIcon from '../assets/static/Profile.png'
export const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo} alt="Netflix_clone" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
)
