import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import CategoryMatelas from './pages/CategoryMatelas';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';
import Gateway from './pages/Gateway';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/gateway" element={<Gateway />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/matelas" element={<CategoryMatelas />} />
            <Route path="category/:category" element={<ProductListing />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation/:id" element={<OrderConfirmation />} />
            <Route path="account/*" element={<Account />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="returns" element={<Returns />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;