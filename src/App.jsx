import './App.css'
import { ProductCard } from './ProductCard'
import { MenuSlider } from './MenuSlider'
import { DeliveryCard } from './DeliveryCard'
import { DeliveryOption } from './DeliveryOption'
import { MotorBikeIcon } from './MotorBikeIcon'
import {PickUpIcon} from './PickUpIcon'
import {MapPinIcon} from './MapPinIcon'
import { useState } from 'react'


const addressList = [
  {
    addressItem:'carrera 27 7'
  },
  {
    addressItem:'carrera27 9'
  }
]

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
  }
]

const text = 'Agregar'
const name = 'Aguaachile Moshi'
const description = 'Aguaachile de camaron (80g) sobre una cama de pepino con salsa de cilantro, yuzu y hojuelas de pimiento.'
const value = '174.00'
const url = 'https://tofuu.getjusto.com/orioneat-local/resized2/8kL4hWqbTRbFZCpu4-1200-1200.webp'


function App() {

  const [isSeeingDelivery, setIsSeeingDelivery] = useState(false)
  const viewClassNameDelivery = isSeeingDelivery ? 'delivery-option--delivery' : 'delivery-option--noView'
  const handleClickDelivery = () => {
    if (isSeeingPickUp === true) {
      setIsSeeingPickUp(!isSeeingPickUp)
    }
    setIsSeeingDelivery(!isSeeingDelivery)
  }

  const [isSeeingPickUp, setIsSeeingPickUp] = useState(false)
  const viewClassNamePickUp = isSeeingPickUp ? 'delivery-option--delivery' : 'delivery-option--noView'
  const handleClickPickUp = () => {
    if (isSeeingDelivery === true) {
    setIsSeeingDelivery(!isSeeingDelivery)
    }
    setIsSeeingPickUp(!isSeeingPickUp)
  }

  return (
    <div className="App">
      <section className='mainContent'>
        <div className='mainContent-delivery'>
          <section className='delivery'>
            <h2>¿Cómo quieres tú pedido?</h2>
            <article className='delivery-options'>
              <div onClick={handleClickDelivery}>
                <DeliveryCard icon={<MotorBikeIcon />} orderClassName='first'>Delivery</DeliveryCard>
              </div>
              <div onClick={handleClickPickUp}>
                <DeliveryCard icon={<PickUpIcon />} orderClassName='second'>Pick Up</DeliveryCard>
              </div>
            </article>

            <DeliveryOption deliveryOption={viewClassNameDelivery} mapPinButton={<MapPinIcon />} mapMessageButton={'Compartir mi ubicación'} idData={'address'} addressList={addressList} />

            <DeliveryOption deliveryOption={viewClassNamePickUp} mapPinButton={<MapPinIcon />} mapMessageButton={'Ubicaciones de restaurantes'} idData={'address'} addressList={addressList} />
          </section>
        </div>


        <section id='share' className='menu'>
          <MenuSlider foods={foods} />
          <div className='menu-content'>
            <p className='typeProducts'>PARA COMPARTIR</p>
            <div className='menu-products'>
              <ProductCard name={name} description={description} value={value} img={url} />
              <ProductCard name={name} description={description} value={value} img={url} />
              <ProductCard name={name} description={description} value={value} img={url} />
              <ProductCard name={name} description={description} value={value} img={url} />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default App
