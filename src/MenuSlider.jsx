import './MenuSlider.css'
export function MenuSlider ({foods}) {
    return(
        <div className='slider'>
            <div className='menu-nav--slider'>
                {
                    foods.map(({urlFood,message}) =>(
                        <a href={`#${urlFood}`}>{message}</a>
                    ))
                }
            </div>
        </div>
        
    )
}