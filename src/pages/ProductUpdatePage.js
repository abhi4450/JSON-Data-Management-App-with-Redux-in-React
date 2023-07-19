import React from "react";
import ProductForm from "../components/ProductForm";
import { useSelector } from "react-redux";
import { selectProductById } from "../features/productsSlice";
import { useParams } from "react-router-dom";


const ProductUpdate = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );

  return <ProductForm initialData={product} isUpdateForm={true} />;
};

export default ProductUpdate;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProduct, selectProductById } from "../features/productsSlice";
// import { useParams, useNavigate } from "react-router-dom";

// const ProductUpdate = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const product = useSelector((state) =>
//     selectProductById(state, parseInt(id))
//   );

//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     if (product) {
//       setName(product.name);
//       setBrand(product.brand);
//       setCategory(product.category);
//       setPrice(product.price.toString());
//       setDescription(product.description);
//     }
//   }, [product]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !brand || !category || !price || !description) {
//       alert("Please fill in all fields");
//       return;
//     }
//     const updatedProduct = {
//       id: product.id,
//       name,
//       brand,
//       category,
//       price: parseFloat(price),
//       description,
//     };
//     dispatch(updateProduct(updatedProduct));
//     navigate("/");
//   };

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6">
//           <h2 className="text-center">Update Product</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 placeholder="Enter product name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="brand" className="form-label">
//                 Brand
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="brand"
//                 placeholder="Enter brand"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="category" className="form-label">
//                 Category
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="category"
//                 placeholder="Enter category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="price"
//                 placeholder="Enter price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="description" className="form-label">
//                 Description
//               </label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-primary">
//                 Update Product
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductUpdate;
