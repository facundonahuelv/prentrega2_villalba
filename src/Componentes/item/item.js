import { Link } from "react-router-dom"

const item = ({name, img, price}) => {
    return (
        <div>
            <h4>{name}</h4>
            <img src= {img} alt = {name}/>
            <p>$ {price}</p>
        </div>
    )
}

export default item