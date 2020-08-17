import React from 'react'
import '../assets/styles/components/Header.scss'
export const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src="../assets/Netflix_Logo.png"
      alt="Netflix_clone"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/user-icon.png" alt="" />
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
