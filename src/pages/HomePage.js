import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../features/productsSlice.js";
import ProductList from "../components/ProductList";
import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    toast.success("product deleted successfully");
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length > 0 ? (
        <ProductList products={products} onDelete={handleDeleteProduct} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default HomePage;
