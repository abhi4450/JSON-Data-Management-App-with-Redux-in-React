import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    fetchProductsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    addProductStart(state) {
      state.status = "loading";
      state.error = null;
    },
    addProductSuccess(state, action) {
      state.products.push(action.payload);
      state.status = "succeeded";
      state.error = null;
    },
    addProductFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    updateProductStart(state) {
      state.status = "loading";
      state.error = null;
    },
    updateProductSuccess(state, action) {
      const updatedProduct = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.products[index] = updatedProduct;
        state.status = "succeeded";
        state.error = null;
      }
    },
    updateProductFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    deleteProductStart(state) {
      state.status = "loading";
      state.error = null;
    },
    deleteProductSuccess(state, action) {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
      state.status = "succeeded";
      state.error = null;
    },
    deleteProductFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get("http://localhost:5001/products");
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    dispatch(addProductStart());
    const response = await axios.post(
      "http://localhost:5001/products",
      product
    );
    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure(error.message));
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch(updateProductStart());
    const response = await axios.put(
      `http://localhost:5001/products/${product.id}`,
      product
    );
    dispatch(updateProductSuccess(response.data));
  } catch (error) {
    dispatch(updateProductFailure(error.message));
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch(deleteProductStart());
    await axios.delete(`http://localhost:5001/products/${productId}`);
    dispatch(deleteProductSuccess(productId));
  } catch (error) {
    dispatch(deleteProductFailure(error.message));
  }
};

// export const selectAllProducts = (state) => state.products.products;

// export const selectProductById = (state, id) =>
//   state.products.products.find((product) => product.id === id);

export const selectProductById = (state, id) =>
  state.products.products.find((product) => product.id === id);

export default productSlice.reducer;
