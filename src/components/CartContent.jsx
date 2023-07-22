import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useCartContext } from "../contexts/CartContext";
import { useAddItemContext } from "../contexts/AddItemContext";
import EmptyCar from "./EmptyCar";
import { Fragment } from "react";

const Cart = () => {

  const { showCart } = useCartContext()
  const { state, dispatch } = useAddItemContext()
  const deleteItemInCart = (item) => {
    dispatch({ type: 'DELETE_ITEM_CART', payload: item })
  }

  const total = state.itemsInCart.reduce((accumulator, item) => accumulator + item.finalPrice, 0);

  const increment = (item) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };

  const decrement = (item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };


  return (
    <div className={showCart ? 'cart-items cart-items-show' : 'cart-items'}>
      {state.itemsInCart.length === 0 ?
        <EmptyCar /> :
        <Fragment>
          <div className="items-in-cart">
            {state.itemsInCart.map((productInCar, index) => {
              return (
                <div className="item-container-cart" key={index}>
                  <div className="img-item-cart">
                    <img src={productInCar.images[0]} alt="Product" />
                  </div>
                  <div className="item-name-price">
                    <p className="name-item">{productInCar.title}</p>
                    <div className="total-price-item">${productInCar.finalPrice}</div>
                  </div>
                  <div className="add-delete-item-cart-container">
                    <div className="add-delete-item-cart">
                      <AiFillPlusCircle onClick={() => increment(productInCar)} className="button-tool-item" />
                      <p className="total-count-item">{productInCar.quantity}</p>
                      <AiFillMinusCircle onClick={() => decrement(productInCar)} className="button-tool-item" />
                    </div>
                    <button onClick={() => deleteItemInCart(productInCar)} className="delete-item-cart-button">Eliminar</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="total-cart">
            <div className="footer-cart-items">
              <input className="voucher-code" placeholder="CODIGO DE PROMOCIÓN" />
              <div className="total-items-price-cart">
                TOTAL: ${total}
              </div>
            </div>
            <button className="button-pay">
              Pagar
            </button>
          </div>
        </Fragment>
      }
    </div>
  );
};

export default Cart;
