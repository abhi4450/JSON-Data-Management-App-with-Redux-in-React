import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductUpdatePage from "./pages/ProductUpdatePage";


const App = () => {
  return (
    <Router>
        <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<ProductCreatePage />} />
          <Route path="/update/:id" element={<ProductUpdatePage />} />
        </Routes>
      </div>

      <footer className="bg-dark text-white text-center p-3 fixed-bottom">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
