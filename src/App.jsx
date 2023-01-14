import './App.css'
import { ProductCard } from './ProductCard'
import { MenuSlider } from './MenuSlider'

const text = 'Agregar'
const name = 'Aguaachile Moshi'
const description = 'Aguaachile de camaron (80g) sobre una cama de pepino con salsa de cilantro, yuzu y hojuelas de pimiento.'
const value = '174.00'
const url = 'https://tofuu.getjusto.com/orioneat-local/resized2/8kL4hWqbTRbFZCpu4-1200-1200.webp'

const foods = [
  {
    urlFood: 'share',
    message: 'PARA COMPARTIR'
  },
  {
    urlFood: 'bento',
    message: 'BENTOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  },
  {
    urlFood: 'taka',
    message: 'TAKA TAKOS'
  }
]

function App() {
  return (
    <div className="App">
      <div id='share' className='menu'>
        <MenuSlider foods = {foods}/>
        <div className='menu-content'>
        <p className='typeProducts'>PARA COMPARTIR</p>
        <div className='menu-products'>
          <ProductCard name={name} description={description} value={value} img={url}/>
          <ProductCard name={name} description={description} value={value} img={url}/>
            <ProductCard name={name} description={description} value={value} img={url}/>
          <ProductCard name={name} description={description} value={value} img={url}/>
          <ProductCard name={name} description={description} value={value} img={url}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
