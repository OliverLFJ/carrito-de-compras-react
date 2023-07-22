import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import { useFiltersContext } from "./contexts/FiltersContext";
import { useProductContext } from "./contexts/ProductContext";
import CartContent from "./components/CartContent";
import { CartContextProvider } from "./contexts/CartContext";
import { AddItemContextProvider } from "./contexts/AddItemContext";
import DesktopMessage from "./components/DesktopMessage";

const App = () => {

  const { products } = useProductContext()
  const { setProductsToFilter } = useFiltersContext()

  useEffect(() => {
    setProductsToFilter(products)
  }, [products])
  const [showMessage, setShowMessage] = useState(false);

  const handleWindowResize = () => {
    setShowMessage(window.innerWidth > 719);
  };

  useEffect(() => {
    handleWindowResize(); // Verificar el tamaño inicial de la ventana
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <Fragment>
      {showMessage ?
        <CartContextProvider>
          <AddItemContextProvider>
            <div className="container">
              <Header />
              <div className="content">
                <div className="container-products">
                  <Filters />
                  <ProductList />
                </div>
                <CartContent />
              </div>
            </div>
          </AddItemContextProvider>
        </CartContextProvider>
        : <DesktopMessage />
      }
    </Fragment>
  )
}

export default App