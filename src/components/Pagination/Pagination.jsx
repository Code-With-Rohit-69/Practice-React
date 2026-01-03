import { useState, useEffect } from "react";
import "./Pagination.css";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(true);

  const length = products.length;

  const startingIndex = (current - 1) * PAGE_SIZE;
  const endingIndex = startingIndex + PAGE_SIZE;

  const totalPage = Math.ceil(length / PAGE_SIZE);

  const visibleData = products.slice(startingIndex, endingIndex);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(`Error in fetching products ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (products.length === 0) return <h1>No Products found</h1>;

  return(
  <div className="products-main">
    <h1>Pagination</h1>
    <div className="pagination">
      <button
        className="prev"
        id="previous"
        disabled={current === 1}
        onClick={() => {
          setCurrent((p) => p - 1);
        }}
      >
        <FiChevronsLeft />
      </button>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setCurrent(index + 1);
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="next"
        id="next"
        disabled={current === totalPage}
        onClick={() => {
          setCurrent((p) => p + 1);
        }}
      >
        <FiChevronsRight />
      </button>
    </div>
    <div className="products">
      {visibleData.map((product, index) => (
        <ProductCard
          key={product.id}
          image={product.images[0]}
          title={product.title}
        />
      ))}
    </div>
  </div>
  )
};
export default Pagination;
