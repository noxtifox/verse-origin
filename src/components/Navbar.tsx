import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          VÉRSE
        </Link>

        {/* Desktop Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/shop?category=Men" onClick={() => setIsMobileMenuOpen(false)}>Men</Link>
          <Link to="/shop?category=Women" onClick={() => setIsMobileMenuOpen(false)}>Women</Link>
          <Link to="/shop?sort=newest" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <div className="search-container">
            {isSearchOpen && (
              <form onSubmit={handleSearch} className="search-form animate-fade-in">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </form>
            )}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={20} />
            </button>
          </div>
          <button><User size={20} /></button>
          <Link to="/wishlist"><Heart size={20} /></Link>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
