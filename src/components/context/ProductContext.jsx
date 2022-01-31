import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState()


    useEffect(()=> {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:5000/product')
        const data = await response.json()
        
        setProduct(data)
    }

    return <ProductContext.Provider value={{
        product,
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;