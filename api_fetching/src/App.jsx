import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://fakestoreapi.com/products",
          {
            cancelToken: source.token,
          }
        );

        setProducts(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError("Failed to fetch products");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // ✅ cleanup
    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>{error}</h3>;
  if (products.length === 0) return <h3>No products found</h3>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> – ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
