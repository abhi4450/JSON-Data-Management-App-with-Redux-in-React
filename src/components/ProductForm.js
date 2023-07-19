import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../features/productsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductForm = ({ initialData = {}, isUpdateForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(initialData.name || "");
  const [brand, setBrand] = useState(initialData.brand || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [price, setPrice] = useState(
    initialData.price ? initialData.price.toString() : ""
  );
  const [description, setDescription] = useState(initialData.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !brand || !category || !price || !description) {
      alert("Please fill in all fields");
      return;
    }
    const product = {
      name,
      brand,
      category,
      price: parseFloat(price),
      description,
    };
    if (isUpdateForm) {
      product.id = initialData.id;
      dispatch(updateProduct(product)).then(() => {
        navigate("/");
        toast.success("Product updated successfully!");
      });
    } else {
      dispatch(addProduct(product)).then(() => {
        navigate("/");
        toast.success("Product added successfully!");
      });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>{isUpdateForm ? "Update Product" : "Create Product"}</h2>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            {isUpdateForm ? "Update Product" : "Add Product"}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
