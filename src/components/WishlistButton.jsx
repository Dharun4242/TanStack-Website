import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function WishlistButton({ productId }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  const toggleWishlist = () => {
    const updated = wishlist.includes(productId)
      ? wishlist.filter((id) => id !== productId)
      : [...wishlist, productId];
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const isWished = wishlist.includes(productId);

  return (
    <button onClick={toggleWishlist} className="text-xl">
      {isWished ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
    </button>
  );
}
