import React, { useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useFiltersContext } from "../contexts/FiltersContext";
import { useAddItemContext } from "../contexts/AddItemContext";

const ProductList = () => {

  const { filteredProducts } = useFiltersContext()
  const { dispatch, state } = useAddItemContext()
  const { itemsInCart } = state

  const itsInCart = (item) => {
    return itemsInCart.some((itemInCar) => itemInCar.id === item.id)
  }

  const addItemFunction = (item) => {
    if (!itsInCart(item)) {
      dispatch({ type: 'ADD_TO_CART', payload: item })
    }
  }

  return (
    <div className="products">
      {filteredProducts.map((item, index) => {
        return (
          <div className="product-item" key={index}>
            <div className="image-container" style={{ backgroundImage: `url(${item.images[0]})` }}>
            </div>
            <div className="title-and-price">
              <h4 className="title-product">{item.title}</h4>
              <h4 className="item-price">${item.price}</h4>
              <span className={`button-add ${itsInCart ? "disabledButton" : ""}`} onClick={() => addItemFunction(item)}><BsFillCartPlusFill className="add-product-icon" /> Añadir al carrito</span>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ProductList;
