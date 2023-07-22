import { createContext, useContext, useEffect, useState } from "react";
import { useProductContext } from "./ProductContext";

const FiltersContext = createContext()
export const useFiltersContext = () => useContext(FiltersContext)

export const FiltersContextProvider = ({ children }) => {


    const [findProductByName, setFindProductByName] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterByCatPrice, setFilterByCatPrice] = useState({
        category: '',
        price: 0
    })
    const [priceFilter, setPriceFilter] = useState('')
    const [productsToFilter, setProductsToFilter] = useState([])
    const [lastPrice, setLastPrice] = useState(0)

    const filtersToList = () => {
        let listToFilter = productsToFilter.slice();
        const priceLowest = Math.max(...listToFilter.map((productPriceLowest) => productPriceLowest.price))
        setLastPrice(priceLowest)
        if (findProductByName !== '') {
            listToFilter = listToFilter.filter((itemName) => itemName.title.toLowerCase().includes(findProductByName.toLowerCase()))
        }

        if (filterByCatPrice.price > 0) {
            listToFilter = listToFilter.filter((itemPrice) => itemPrice.price <= filterByCatPrice.price)
        }

        if (filterByCatPrice.category !== '') {
            listToFilter = listToFilter.filter((itemCategory) => itemCategory.category === filterByCatPrice.category)
        }
        if (priceFilter === 'expensive') {
            listToFilter.sort((a, b) => b.price - a.price);
        } else if (priceFilter === "cheapest") {
            listToFilter.sort((a, b) => a.price - b.price);
        } else {
            setFilteredProducts(listToFilter)
        }
        setFilteredProducts(listToFilter)
    }

    useEffect(() => {
        filtersToList()
    }, [findProductByName, filterByCatPrice, productsToFilter, priceFilter])


    return (
        <FiltersContext.Provider
            value={{
                setProductsToFilter,
                setFindProductByName,
                setFilterByCatPrice,
                setPriceFilter,
                filterByCatPrice,
                filteredProducts,
                lastPrice,
                findProductByName,
                priceFilter
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}