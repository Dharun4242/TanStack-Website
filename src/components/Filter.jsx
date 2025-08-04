export default function Filter({ category, setCategory }) {
  const categories = ['All', 'Mobile', 'TV', 'Laptop', 'Accessories'];

  return (
    <div className="flex gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat === 'All' ? '' : cat)}
          className={`px-3 py-1 rounded border ${
            category === cat || (cat === 'All' && category === '') 
              ? 'bg-blue-500 text-white' 
              : 'bg-white text-black'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
