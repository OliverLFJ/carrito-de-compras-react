import { createContext, useContext, useEffect, useReducer, useState, } from "react";
import AddToCartReducer from "./../redux/AddToCartReducer";

const initialValue = { itemsInCart: [] }

const AddItemContext = createContext();
export const useAddItemContext = () => useContext(AddItemContext)
export const AddItemContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AddToCartReducer, initialValue)
    const [itemsInCart, setItemsInCart] = useState(0)

    useEffect(() => {
        setItemsInCart(state.itemsInCart.length)
    }, [state])

    return (
        <AddItemContext.Provider
            value={{
                state,
                dispatch,
                itemsInCart
            }}
        >
            {children}
        </AddItemContext.Provider>
    )
}