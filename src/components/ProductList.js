import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
              <Link to={`/update/${product.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button
                onClick={() => onDelete(product.id)}
                className="btn btn-danger ms-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
