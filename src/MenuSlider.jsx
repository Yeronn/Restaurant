import './MenuSlider.css'
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