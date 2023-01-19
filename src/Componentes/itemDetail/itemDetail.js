import { useState } from "react";
import { Link } from "react-router-dom";
import itemCount from "../itemCount/itemCount";

const itemDetail = ({id, name, img, price, category, description, stock}) => {
    
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (qty) => {
                        setQuantity(qty)
    }
    
    return (
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name} style={{width : 100}}/>
            <p>descripcion: {description}</p>
            {
                quantity > 0 ? (
                    <link>Terminar Compra</link>
                ) : (
                    <itemCount stock = {stock} onAdd={handleOnAdd}/>
                )
            }
            
        </div>
    )
}

export default itemDetail