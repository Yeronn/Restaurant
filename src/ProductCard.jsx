import './ProductCard.css';
import {Button} from "./Button";

export function ProductCard({img, name, description, value}){
    return(
        <article className="productCard">
            <img className="productCard-img" src={`${img}`} alt="Plato" />
            <div className="productCard-content">
                <h2>{name}</h2>
                <p>{description}</p>
                <span>${value}</span>
                <div>
                    <Button>Agregar</Button>
                </div>
            </div>
        </article>
    )
}