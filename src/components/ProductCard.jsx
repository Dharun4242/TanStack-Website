import WishlistButton from './WishlistButton';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <WishlistButton productId={product.id} />
      </div>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="font-bold">₹{product.price}</p>
    </div>
  );
}
