import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from './Button'
import { ProductCard } from './ProductCard'
const text = 'Agregar'
const name = 'Aguaachile Moshi'
const description = 'Aguaachile de camaron (80g) sobre una cama de pepino con salsa de cilantro, yuzu y hojuelas de pimiento.'
const value = '174.00'

function App() {
  return (
    <div className="App">
      <Button>{text}</Button>
      <ProductCard name={name} description={description} value={value}/>
    </div>
  )
}

export default App
