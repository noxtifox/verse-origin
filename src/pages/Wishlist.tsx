import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page container section-padding pt-0">
      <div className="wishlist-header">
        <h1>Wishlist</h1>
        <p>{wishlist.length} Items</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist text-center">
          <Heart size={48} className="mb-md" />
          <h2 className="mb-sm">Your wishlist is empty</h2>
          <p className="text-muted mb-lg">Save items you love and buy them later.</p>
          <Link to="/shop" className="btn btn-primary">Discover Fashion</Link>
        </div>
      ) : (
        <div className="grid-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
