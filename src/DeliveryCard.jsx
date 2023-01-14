import './DeliveryCard.css'
import { DeliveryOption } from './DeliveryOption'
import {MapPinIcon} from './MapPinIcon'


export function DeliveryCard({children, icon, orderClassName}){
    const addressList = [
        {
            addressItem: 'carrera 27 7'
        },
        {
            addressItem: 'carrera27 9'
        }
    ]
    return(
        <>
            <button className={`delivery-options--card ${orderClassName}`}>
                <span>{icon}</span>
                <p>{children}</p>
            </button>
        </>
    )
}