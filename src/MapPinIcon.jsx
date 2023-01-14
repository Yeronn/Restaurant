import * as React from "react"

export function MapPinIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-2"
            width={24}
            height={24}
            strokeWidth={1.5}
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M18 6v.01M18 13l-3.5-5a4 4 0 1 1 7 0L18 13" />
            <path d="M10.5 4.75 9 4 3 7v13l6-3 6 3 6-3v-2M9 4v13M15 15v5" />
        </svg>
    )
}