import './Button.css'
/*funcion qque crea un boton*/
export function Button({children}){
    return(
        <button className="btn">{children}</button>
    )
}