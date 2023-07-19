
import React from "react";
import ProductForm from "../components/ProductForm";

const ProductCreate = () => {
  return <ProductForm isUpdateForm={false} />;
};

export default ProductCreate;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../features/productsSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductCreatePage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !brand || !category || !price || !description) {
//       alert("Please fill in all fields");
//       return;
//     }
//     const product = {
//       name,
//       brand,
//       category,
//       price: parseFloat(price),
//       description,
//     };
//     dispatch(addProduct(product)).then(() => {
//       navigate("/");
//       toast.success("Product added successfully!");
//     });
//   };

//   const handleCancel = () => {
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6">
//           <h2 className="text-center">Create Product</h2>
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
//                 Add Product
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary ms-2"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCreatePage;
