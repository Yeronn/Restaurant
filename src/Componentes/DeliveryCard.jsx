import './DeliveryCard.css'

/*Componente que crea las opciones de entrega, este tiene el nombre de la
opcion de entrega y un icono en formato componente*/
export function DeliveryCard({children, icon}){
    return(
        <>
            <button className={`delivery-options--card`}>
                <span>{icon}</span>
                <p>{children}</p>
            </button>
        </>
    )
}