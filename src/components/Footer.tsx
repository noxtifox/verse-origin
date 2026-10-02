import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>THE VÉRSE EDIT</h3>
            <p>New drops, exclusive releases and style stories, delivered occasionally.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" required />
            <button type="submit">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <h2>VÉRSE</h2>
            <p>Wear Your Statement.</p>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Youtube</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop?category=Men">Men</Link></li>
              <li><Link to="/shop?category=Women">Women</Link></li>
              <li><Link to="/shop?category=Accessories">Accessories</Link></li>
              <li><Link to="/shop?sort=newest">New Arrivals</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Shipping & Returns</Link></li>
              <li><Link to="#">Size Guide</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>About</h4>
            <ul>
              <li><Link to="#">Our Story</Link></li>
              <li><Link to="#">Sustainability</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Stores</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VÉRSE. All rights reserved.</p>
          <div className="legal-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
