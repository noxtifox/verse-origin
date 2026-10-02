import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialSort = searchParams.get('sort') || 'default';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [priceFilter, setPriceFilter] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState(initialSort);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setCategoryFilter(searchParams.get('category') || 'All');
    setSearchQuery(searchParams.get('search') || '');
    if (searchParams.get('sort')) {
      setSortOption(searchParams.get('sort')!);
    }
  }, [location.search]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (categoryFilter !== 'All') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    result = result.filter(
      (p) => p.price >= priceFilter[0] && p.price <= priceFilter[1]
    );

    if (sortOption === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    return result;
  }, [categoryFilter, priceFilter, sortOption, searchQuery]);

  return (
    <div className="shop-page container section-padding">
      <div className="shop-header">
        <h1>{searchQuery ? `Search: ${searchQuery}` : categoryFilter === 'All' ? 'All Products' : categoryFilter}</h1>
        <p>{filteredProducts.length} Products</p>
      </div>

      <div className="shop-controls">
        <button 
          className="mobile-filter-btn btn btn-secondary"
          onClick={() => setIsMobileFiltersOpen(true)}
        >
          <Filter size={18} /> Filters
        </button>

        <div className="sort-control">
          <span>Sort by:</span>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="default">Featured</option>
            <option value="newest">New Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="shop-layout">
        {/* Filters Sidebar */}
        <aside className={`shop-filters ${isMobileFiltersOpen ? 'open' : ''}`}>
          <div className="filter-header-mobile">
            <h3>Filters</h3>
            <button onClick={() => setIsMobileFiltersOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="filter-group">
            <h4 className="filter-title">Category <ChevronDown size={16} /></h4>
            <div className="filter-options">
              {['All', 'Men', 'Women', 'Accessories'].map((cat) => (
                <label key={cat} className="filter-label">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat}
                    onChange={() => setCategoryFilter(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-title">Price Range <ChevronDown size={16} /></h4>
            <div className="filter-options">
              <label className="filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceFilter[0] === 0 && priceFilter[1] === 5000}
                  onChange={() => setPriceFilter([0, 5000])}
                />
                <span>All Prices</span>
              </label>
              <label className="filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceFilter[0] === 0 && priceFilter[1] === 2000}
                  onChange={() => setPriceFilter([0, 2000])}
                />
                <span>Under ₹2,000</span>
              </label>
              <label className="filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceFilter[0] === 2000 && priceFilter[1] === 4000}
                  onChange={() => setPriceFilter([2000, 4000])}
                />
                <span>₹2,000 - ₹4,000</span>
              </label>
              <label className="filter-label">
                <input
                  type="radio"
                  name="price"
                  checked={priceFilter[0] === 4000 && priceFilter[1] === 10000}
                  onChange={() => setPriceFilter([4000, 10000])}
                />
                <span>Over ₹4,000</span>
              </label>
            </div>
          </div>
          
          <button 
            className="btn btn-secondary btn-full mt-4" 
            onClick={() => {
              setCategoryFilter('All');
              setPriceFilter([0, 5000]);
              setSortOption('default');
              setSearchQuery('');
              setIsMobileFiltersOpen(false);
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Product Grid */}
        <main className="shop-grid-container">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className="grid-3 shop-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
      
      {isMobileFiltersOpen && (
        <div className="filter-overlay" onClick={() => setIsMobileFiltersOpen(false)}></div>
      )}
    </div>
  );
};

export default Shop;
