import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Minus, Plus, Truck, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './ProductDetail.css';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setActiveImage(product.image1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product not found</h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/shop')}>
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity,
      selectedSize,
      selectedColor,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="product-detail-page container section-padding pt-0">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> Back
      </button>

      <div className="product-detail-layout">
        <div className="product-gallery animate-fade-in">
          <div className="gallery-thumbnails">
            <button 
              className={activeImage === product.image1 ? 'active' : ''} 
              onClick={() => setActiveImage(product.image1)}
            >
              <img src={product.image1} alt={`${product.name} 1`} />
            </button>
            <button 
              className={activeImage === product.image2 ? 'active' : ''} 
              onClick={() => setActiveImage(product.image2)}
            >
              <img src={product.image2} alt={`${product.name} 2`} />
            </button>
          </div>
          <div className="gallery-main">
            <img src={activeImage} alt={product.name} />
          </div>
        </div>

        <div className="product-info-panel">
          <div className="product-header">
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-price">₹{product.price}</p>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-options">
            <div className="option-group">
              <label>Color: <span>{selectedColor}</span></label>
              <div className="color-selector">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <div className="size-header">
                <label>Size</label>
                <button className="size-guide-btn">Size Guide</button>
              </div>
              <div className="size-selector">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Quantity</label>
              <div className="quantity-controls lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-secondary btn-full mb-sm" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-primary btn-full mb-sm" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button 
              className="btn btn-wishlist btn-full"
              onClick={() => toggleWishlist(product)}
            >
              <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} /> 
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          <div className="product-shipping">
            <div className="shipping-item">
              <Truck size={20} />
              <div>
                <h4>Free Shipping</h4>
                <p>On all orders over ₹4,000</p>
              </div>
            </div>
            <div className="shipping-item">
              <Truck size={20} />
              <div>
                <h4>Easy Returns</h4>
                <p>30-day return policy</p>
              </div>
            </div>
          </div>
          
          <div className="product-details-accordion">
            <details>
              <summary>Product Details & Materials</summary>
              <div className="details-content">
                <ul>
                  <li>Premium quality materials</li>
                  <li>Ethically manufactured</li>
                  <li>Machine wash cold with like colors</li>
                  <li>Do not bleach</li>
                  <li>Tumble dry low</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
