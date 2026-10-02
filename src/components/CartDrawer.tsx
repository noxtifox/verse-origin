import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} />
              <p>Your cart is empty.</p>
              <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-item">
                <img src={item.product.image1} alt={item.product.name} />
                <div className="cart-item-details">
                  <div className="cart-item-title-row">
                    <h4>{item.product.name}</h4>
                    <button onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}>
                      <X size={16} />
                    </button>
                  </div>
                  <p className="cart-item-variants">
                    {item.selectedColor} / {item.selectedSize}
                  </p>
                  <div className="cart-item-bottom">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="cart-item-price">₹{item.product.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart-summary-row total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className="btn btn-primary btn-full" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
