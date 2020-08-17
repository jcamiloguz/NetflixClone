import React from 'react'
import PropTpyes from 'prop-types'
import '../assets/styles/components/CarruselItem.scss'
import playIcon from '../assets/static/play_icon.png'
export const CarruselItem = ({
  cover,
  title,
  year,
  contentRating,
  duration,
}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
)
CarruselItem.propTypes = {
  cover: PropTpyes.string,
  title: PropTpyes.string,
  year: PropTpyes.number,
  contentRating: PropTpyes.string,
  duration: PropTpyes.number,
}
