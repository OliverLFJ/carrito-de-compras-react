import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false)

    return (
        <CartContext.Provider
            value={{
                setShowCart,
                showCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}