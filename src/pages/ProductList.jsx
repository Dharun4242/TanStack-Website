import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, Suspense, lazy, useMemo } from "react";

const ProductCard = lazy(() => import("../components/ProductCard"));
const Filter = lazy(() => import("../components/Filter"));

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:3000/products");
  return res.data;
};

export default function ProductList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    if (!data) return [];
    console.log("Filtering products by category:", category);
    return category ? data.filter((p) => p.category === category) : data;
  }, [category, data]);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <Filter category={category} setCategory={setCategory} />
      </Suspense>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Suspense fallback={<p>Loading product cards...</p>}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
