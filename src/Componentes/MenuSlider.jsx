import './MenuSlider.css'
/*Componente que recibe una lista de objetos que contienen los valores de url
y message o nombre de la seccion del menu. Devuelve un slider con todas las
secciones, a las cuales se les puede hacer click lo lleva a esa seccion*/
export function MenuSlider ({foods}) {
    return(
        <div className='slider'>
            <div className='menu-nav--slider'>
                {
                    foods.map(({urlFood,message}) =>(
                        <a key={urlFood} href={`#${urlFood}`}>{message}</a>
                    ))
                }
            </div>
        </div>
        
    )
}