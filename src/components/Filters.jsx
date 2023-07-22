import { useEffect } from "react"
import { useFiltersContext } from "../contexts/FiltersContext"
import { useProductContext } from "../contexts/ProductContext"

const Filters = () => {

    const { categories } = useProductContext()

    const {
        setFindProductByName,
        setFilterByCatPrice,
        setPriceFilter,
        filterByCatPrice,
        lastPrice,
        priceFilter,
        findProductByName } = useFiltersContext()

    const cleanFilters = () => {
        setFindProductByName('')
        setFilterByCatPrice({ category: '', price: 0 })
        setPriceFilter('')
    }

    return (
        <div className="filters-cotainer">
            <div className="form-group">
                <label>Nombre</label>
                <input value={findProductByName} type="text" onChange={(e) => setFindProductByName(e.target.value)} className="filter-name" placeholder="find for name" />
            </div>
            <div className="advanced-filters">
                <div className="form-group">
                    <label>Categoria</label>
                    <select value={filterByCatPrice.category} onChange={(e) => setFilterByCatPrice({ ...filterByCatPrice, category: e.target.value })} className="filter-category">
                        <option value=''>Ninguna</option>
                        {categories.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>PRECIO</label>
                    <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="filter-price-more-less">
                        <option value=''>Ninguno</option>
                        <option value='expensive'>Precio Más Alto</option>
                        <option value='cheapest'>Precio Mas Bajo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Rango de Precio</label>
                    <span className="filter-price">$0<input value={filterByCatPrice.price} onChange={(e) => setFilterByCatPrice({ ...filterByCatPrice, price: e.target.value })} className="slider-price" type="range" min="0" max={lastPrice} step="1" />${filterByCatPrice.price}</span>
                </div>
                <div className="clean-filters-button-container">
                    <button className="clean-filters-button" onClick={cleanFilters}>Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default Filters