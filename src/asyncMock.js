const products = [
    { 
        id: '1', 
        name: 'Tortas', 
        price: 6000, 
        category: 'Pasteleria', 
        img:'https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2022-07/574470-42012-chocotorta_0.jpeg?itok=6OBOUpxy', 
        stock: 10, 
        description:'Tortas para eventos'
    },
    { id: '2', name: 'Cheesecake', price: 6000, category: 'Pasteleria', img:'https://n9z4u8f2.rocketcdn.me/wp-content/uploads/2019/01/Cheesecake-de-arandanos01.jpg', stock: 7, description:'Torta de queso crema'},
    { id: '3', name: 'Carrot Cake', price: 7800, category: 'Pasteleria', img:'https://cocina-casera.com/wp-content/uploads/2017/08/carrot-cake-pastel-zanahoria.jpg', stock: 3, description:'Torta de zanahoria rellena con queso crema'}
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
