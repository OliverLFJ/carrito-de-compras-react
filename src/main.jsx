import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { FiltersContextProvider } from './contexts/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  < ProductContextProvider >
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </ProductContextProvider>,
)
