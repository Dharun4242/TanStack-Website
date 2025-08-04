import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import { useState } from 'react';

const fetchProducts = async () => {
  const res = await axios.get('http://localhost:3000/products');
  return res.data;
};

export default function ProductList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [category, setCategory] = useState('');

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  const filtered = category
    ? data.filter((p) => p.category === category)
    : data;

  return (
    <>
      <Filter category={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
