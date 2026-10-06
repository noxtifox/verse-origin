import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> 94ae42a758ba6f9bb245851d7a227b5d3b5fafdf
import { CartProvider } from './context/CartContext.tsx'
import { WishlistProvider } from './context/WishlistContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
=======
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
>>>>>>> 94ae42a758ba6f9bb245851d7a227b5d3b5fafdf
  </React.StrictMode>,
)
