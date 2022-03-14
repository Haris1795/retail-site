import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState()
    const [cartList, setCartList] = useState([{
        item: {}
    }])

    useEffect(()=> {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:8008/product')
        const data = await response.json()
        
        setProduct(data)
    }

    const addProduct = (item) => {
        if(cartList.includes(item)){
            console.log('null')
            return null
        } else {
            setCartList([item, ...cartList])
        }
    }

    const handleClick = (id) => {
            setCartList(cartList.filter((item)=> item.id !== id))
    }

    return <ProductContext.Provider value={{
        product,
        cartList,
        addProduct,
        handleClick,
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;