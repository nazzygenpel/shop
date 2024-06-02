import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function Bestsellerproduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  return (
    <div className="bestproduct-container">
      <div className="bestproduct-header">
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve conflict between</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            img={product.thumbnail}
            itemName={product.title}
            itemDescription={product.description}
            itemPrice={`$${product.price}`}
            unitPrice={`$${(
              product.price *
              (1 + product.discountPercentage / 100)
            ).toFixed(2)}`}
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {products.length < total && (
        <div className="flex">
          <button
            className="load-more"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
