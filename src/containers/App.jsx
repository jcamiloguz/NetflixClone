import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Categories } from '../components/Categories'
import { Carrusel } from '../components/Carrusel'
import { CarruselItem } from '../components/CarruselItem'
import { Footer } from '../components/Footer'
import '../assets/styles/App.scss'
import { useInitialState } from '../hooks/useInitialState'
const API = 'http://localhost:3000/initialState'
const App = () => {
  const videos = useInitialState(API)

  return videos.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="">
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carrusel>
            {videos.mylist.map((item) => {
              return <CarruselItem key={item.id} {...item} />
            })}
          </Carrusel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrusel>
          {videos.trends.map((item) => {
            return <CarruselItem key={item.id} {...item} />
          })}
        </Carrusel>
      </Categories>
      <Categories title="Originales de Netflix">
        <Carrusel>
          {videos.originals.map((item) => {
            return <CarruselItem key={item.id} {...item} />
          })}
        </Carrusel>
      </Categories>
      <Footer />
    </div>
  )
}
export default App
