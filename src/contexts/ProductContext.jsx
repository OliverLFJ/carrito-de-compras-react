import { createContext, useContext, useEffect, useState } from "react"

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
        fetch('https://dummyjson.com/products/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <ProductContext.Provider
            value={{
                products,
                categories
            }}>
            {children}
        </ProductContext.Provider >
    )
}
