import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import Logo from '../assets/static/Netflix_Logo.png'
import userIcon from '../assets/static/Profile.png'

export const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={Logo} alt="Netflix_clone" />
    </Link>
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
          <Link to="/login">Cerrar Sesión</Link>
        </li>
      </ul>
    </div>
  </header>
)
