import { useState, useEffect } from "react"
import { getProductById, getProducts, getProductsByCategory } from "../../asyncMock"
import itemList from "../itemList/itemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect (() => {
      const asyncFunction = categoryId ? getProductsByCategory : getProducts

      asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
              console.log(error)
            })
    }, [categoryId])

    return (
        <div>
          <h1>Lista</h1>
          <itemList products={products}/>
        </div>
    )
}

export default ItemListContainer