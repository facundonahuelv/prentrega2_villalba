import item from "../item/item"

const itemList = ((products)) => {
    return (
        <div>
            {products.map(prod => <item key={prod.id}{..prod}/>)}
        </div>
    )
}

export default itemList