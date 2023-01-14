import * as React from "react"

export function PickUpIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin"
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
            <circle cx={12} cy={11} r={3} />
            <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        </svg>
    )
}