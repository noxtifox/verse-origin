import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const newArrivals = products.filter(p => p.isNew).slice(0, 8);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
            alt="Fashion Hero" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content animate-fade-in">
          <h1>WEAR YOUR STATEMENT.</h1>
          <p>Contemporary essentials designed for those who define their own style.</p>
          <div className="hero-buttons">
            <Link to="/shop?category=Men" className="btn btn-primary">SHOP MEN</Link>
            <Link to="/shop?category=Women" className="btn btn-primary">SHOP WOMEN</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding container">
        <div className="grid-3 categories-grid">
          <Link to="/shop?category=Men" className="category-card">
            <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop" alt="Men" />
            <div className="category-card-content">
              <h2>MEN</h2>
              <span>Explore Collection</span>
            </div>
          </Link>
          <Link to="/shop?category=Women" className="category-card">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" alt="Women" />
            <div className="category-card-content">
              <h2>WOMEN</h2>
              <span>Explore Collection</span>
            </div>
          </Link>
          <Link to="/shop?category=Accessories" className="category-card">
            <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" alt="Accessories" />
            <div className="category-card-content">
              <h2>ACCESSORIES</h2>
              <span>Explore Collection</span>
            </div>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding pb-0 container">
        <div className="section-header text-center mb-lg">
          <h2>New Arrivals</h2>
          <Link to="/shop?sort=newest" className="link-with-line">View All</Link>
        </div>
        <div className="grid-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-content text-center">
            <h2>REDEFINING MODERN ESSENTIALS</h2>
            <p>
              VÉRSE is built around the idea that clothing should feel as individual as the person wearing it. 
              We create contemporary pieces that balance comfort, structure and everyday versatility. 
              Meticulously crafted for the modern wardrobe.
            </p>
            <Link to="/about" className="btn btn-secondary mt-4">Discover Our Story</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
