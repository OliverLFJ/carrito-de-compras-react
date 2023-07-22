import React, { useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../contexts/CartContext";
import { useAddItemContext } from "../contexts/AddItemContext";

const Header = () => {

  const { setShowCart, showCart } = useCartContext()
  const { itemsInCart, state } = useAddItemContext()

  const showCartItems = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="header">
      <h2 className="store-name">Tienda Productos</h2>
      <a onClick={showCartItems} className="button-cart ">
        <BsFillCartFill className="cart-icon" />
        <div className={itemsInCart ? "tooltip-cart" : "hidde-tooltip-cart"} >{Object.keys(state.itemsInCart).length > 9 ? '9+' : Object.keys(state.itemsInCart).length}</div>
      </a>
    </div>
  );
};

export default Header;