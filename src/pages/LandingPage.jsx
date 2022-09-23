import React from 'react'
import Busqueda from '../components/Busqueda'
import { Peliculas } from '../components/Peliculas'

export function LandingPage() {
  return (
    <div>
      <Busqueda/>
      <Peliculas/>
    </div>
  )
}
