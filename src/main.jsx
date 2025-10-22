import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'
import Login from './Pages/Auth/Login.jsx'
import Register from './Pages/Auth/Register.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Confirmation from './Pages/Confirmation/Confirmation.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/confirmation" element={<Confirmation />} />

            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
