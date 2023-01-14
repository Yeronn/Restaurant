import './Input.css'

export function Input({typeInput,pHolder, value, required, list}) {
    return(
        <input type={typeInput} placeholder={pHolder} value={value} required={required} list={list}/>
    )
}