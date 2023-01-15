import * as React from "react"
/*Componente que crea un icono de una moto */
export function MotorBikeIcon(props){
    return(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-motorbike"
        width={24}
        height={24}
        strokeWidth={1.5}
        stroke="#000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx={5} cy={16} r={3} />
        <circle cx={19} cy={16} r={3} />
        <path d="M7.5 14h5l4-4H6m1.5 4 4-4" />
        <path d="M13 6h2l1.5 3 2 4" />
    </svg>
    )
}