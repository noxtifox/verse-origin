import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default size and color for quick add
    addToCart({
      product,
      quantity: 1,
      selectedSize: 'M',
      selectedColor: product.colors[0]
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div 
      className="product-card" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="product-image-container">
        {product.isNew && <span className="badge new-badge">New</span>}
        
        <button 
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={handleWishlist}
        >
          <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
        </button>

        <img 
          src={isHovered ? product.image2 : product.image1} 
          alt={product.name} 
          className="product-image animate-fade-in"
        />

        <div className={`quick-add-container ${isHovered ? 'visible' : ''}`}>
          <button className="btn btn-primary btn-full" onClick={handleQuickAdd}>
            Quick Add
          </button>
        </div>
      </Link>

      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-colors">{product.colors.length} Colors</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <span className="product-price">₹{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
