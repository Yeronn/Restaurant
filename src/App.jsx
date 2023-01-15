import './App.css'
import { useState } from 'react'
import { ProductCard } from './Componentes/ProductCard'
import { MenuSlider } from './Componentes/MenuSlider'
import { DeliveryCard } from './Componentes/DeliveryCard'
import { DeliveryOption } from './Componentes/DeliveryOption'
/*Iconos en componentes para que react los procese*/
import { MotorBikeIcon } from './Componentes/MotorBikeIcon'
import {PickUpIcon} from './Componentes/PickUpIcon'
import {MapPinIcon} from './Componentes/MapPinIcon'

//Datos para poner direcciones de entrega en un input
const addressList = [
  {
    addressItem:'carrera 27 7'
  },
  {
    addressItem:'carrera27 9'
  }
]

//Datos para la parte de la barra de navegacion del menu
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

//Datos de un plato de comida
const text = 'Agregar'
const name = 'Aguaachile Moshi'
const description = 'Aguaachile de camaron (80g) sobre una cama de pepino con salsa de cilantro, yuzu y hojuelas de pimiento.'
const value = '174.00'
const url = 'https://tofuu.getjusto.com/orioneat-local/resized2/8kL4hWqbTRbFZCpu4-1200-1200.webp'

//FUncion que  se va a renderizar
function App() {
  //hook de estado y funcion para controlar la opcion de entrega a domicilio(Delivery)
  //Esto hace que cuando se le de click abra los inputs donde se digitan los datos de entrega
  const [isSeeingDelivery, setIsSeeingDelivery] = useState(false)
  //condicional para pasarle un nombre de clase a la opcion, una clase  hace que aparezcan
  //los inputs, la otra hace que desaparezcan
  const viewClassNameDelivery = isSeeingDelivery ? 'delivery-option--delivery' : 'delivery-option--noView'
  //funcion que controla el estado cuando se hace click
  const handleClickDelivery = () => {
    if (isSeeingPickUp === true) {
      setIsSeeingPickUp(!isSeeingPickUp) //cierra los inputs de laa otra opcion de entrega
    }
    setIsSeeingDelivery(!isSeeingDelivery)
  }

  //hook de estado, como el anterior pero este es para recoger en restaaurante o comer en restaurante
  //hace lo mismo que lo anterior
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
        {/*Contenido de opciones de entrega*/}
        <div className='mainContent-delivery'>
          <section className='delivery'>
            <h2>¿Cómo quieres tú pedido?</h2>
            {/*Dos opciones de entrega*/}
            <article className='delivery-options'>
              <div onClick={handleClickDelivery}>
                {/*Primera opcion de entrega*/}
                <DeliveryCard icon={<MotorBikeIcon />}>Delivery</DeliveryCard>
              </div>
              <div onClick={handleClickPickUp}>
                {/*Segunda opcion de entrega*/}
                <DeliveryCard icon={<PickUpIcon />}>Pick Up</DeliveryCard>
              </div>
            </article>
            {/*Dos formularios u inputs, dependiendo de que opcion de entrega se 
            le dio click aparece uno u otro*/}
            <DeliveryOption deliveryOption={viewClassNameDelivery} mapPinButton={<MapPinIcon />} mapMessageButton={'Compartir mi ubicación'} idData={'address'} addressList={addressList} />
            <DeliveryOption deliveryOption={viewClassNamePickUp} mapPinButton={<MapPinIcon />} mapMessageButton={'Ubicaciones de restaurantes'} idData={'address'} addressList={addressList} />
          </section>
        </div>
        {/*Contenido de barra de navegacion de menu y menu*/}
        <section id='share' className='menu'>
          <MenuSlider foods={foods} /> {/*barra de navegacion*/}
          {/*Menu*/}
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
