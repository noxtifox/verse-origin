import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const [isPlaced, setIsPlaced] = useState(false);

  if (cart.length === 0 && !isPlaced) {
    return (
      <div className="container section-padding text-center">
        <h2>Your cart is empty</h2>
        <p className="mb-md">Add some items before proceeding to checkout.</p>
        <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
      </div>
    );
  }

  if (isPlaced) {
    return (
      <div className="container section-padding text-center">
        <h2 className="mb-sm">Order Placed Successfully!</h2>
        <p className="mb-md">Thank you for shopping with VÉRSE.</p>
        <p className="text-muted mb-lg">Order #VRS-{Math.floor(100000 + Math.random() * 900000)}</p>
        <Link to="/" className="btn btn-primary" onClick={() => localStorage.removeItem('verse_cart')}>
          Return to Home
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlaced(true);
    // In a real app, clear cart context here. But for demo, doing it on clicking Return Home is fine
  };

  return (
    <div className="checkout-page container section-padding pt-0">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-container">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
            </div>

            <div className="form-section">
              <h3>Delivery Address</h3>
              <div className="grid-2">
                <div className="form-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Address" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Apartment, suite, etc. (optional)" />
              </div>
              <div className="grid-3-form">
                <div className="form-group">
                  <input type="text" placeholder="City" required />
                </div>
                <div className="form-group">
                  <select required defaultValue="">
                    <option value="" disabled>State</option>
                    <option value="DL">Delhi</option>
                    <option value="MH">Maharashtra</option>
                    <option value="KA">Karnataka</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="PIN code" required pattern="[0-9]{6}" />
                </div>
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone number" required />
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Method</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment" value="card" defaultChecked />
                  <span>Credit / Debit Card</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" value="upi" />
                  <span>UPI (Google Pay, PhonePe)</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" value="cod" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full submit-btn-mobile">
              Place Order (₹{cartTotal})
            </button>
          </form>
        </div>

        <div className="checkout-summary-container">
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cart.map((item, index) => (
                <div key={index} className="summary-item">
                  <div className="summary-item-image">
                    <img src={item.product.image1} alt={item.product.name} />
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                  <div className="summary-item-details">
                    <h4>{item.product.name}</h4>
                    <p>{item.selectedColor} / {item.selectedSize}</p>
                  </div>
                  <div className="summary-item-price">
                    ₹{item.product.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="totals-row">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="totals-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="totals-row total">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>
            </div>

            <button type="submit" form="checkout-form" className="btn btn-primary btn-full submit-btn-desktop">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
