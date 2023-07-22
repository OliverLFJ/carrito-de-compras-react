import { useCartContext } from "../contexts/CartContext"

const EmptyCar = () => {
    const { setShowCart } = useCartContext()
    return (
        <div className="empty-cart-container">
            <h1 className="title-empty">Tu Carrito Está Vacío</h1>
            <button className="button-continue-shopping" onClick={()=>setShowCart(false)}>Seguir Comprando</button>
        </div>
    )

}

export default EmptyCar