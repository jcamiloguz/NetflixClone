import React from 'react'
import '../assets/styles/components/Carrusel.scss'

export const Carrusel = ({ children }) => (
  <section class="carousel">
    <div class="carousel__container">{children}</div>
  </section>
)
