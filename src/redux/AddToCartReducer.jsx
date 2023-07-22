
const AddToCartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = {
                ...action.payload,
                quantity: 1,
                finalPrice: action.payload.price
            };
            return { itemsInCart: [...state.itemsInCart, newItem] }
        case 'DELETE_ITEM_CART':
            return { itemsInCart: state.itemsInCart.filter(item => item.id !== action.payload.id) }
        case 'INCREMENT_QUANTITY':
            return {
                itemsInCart: state.itemsInCart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            finalPrice: item.finalPrice + action.payload.price
                        };
                    } else {
                        return item;
                    }
                })
            };

        case 'DECREMENT_QUANTITY':
            return {
                itemsInCart: state.itemsInCart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                            finalPrice: item.finalPrice > item.price ? item.finalPrice - action.payload.price : item.price
                        };
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state
    }
}

export default AddToCartReducer