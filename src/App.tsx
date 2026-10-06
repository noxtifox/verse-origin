import { useEffect } from 'react';
<<<<<<< HEAD
import { Routes, Route, useLocation } from 'react-router-dom';
=======
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
>>>>>>> 94ae42a758ba6f9bb245851d7a227b5d3b5fafdf
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
<<<<<<< HEAD
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

=======
    <HashRouter>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}


>>>>>>> 94ae42a758ba6f9bb245851d7a227b5d3b5fafdf
export default App;
