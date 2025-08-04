import { Suspense, lazy } from "react";

const WishlistButton = lazy(() => import("./WishlistButton"));


export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <Suspense fallback={<div>Loading wishlist...</div>}>
  <WishlistButton productId={product.id} />
</Suspense>
      </div>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="font-bold">₹{product.price}</p>
    </div>
  );
}
