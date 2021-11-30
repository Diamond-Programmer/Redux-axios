import { combineReducers } from "redux";
import { getProductReducer } from "../modules/products/getProductReducer";
import { updateProductReducer } from "../modules/updateProduct/updateProductReducer";
import { addProductReducer } from './../modules/addProduct/addProductReducer';
// import { deleteProductReducer } from './../modules/deleteProduct/deleteProductRecuder';

export const rootReducers = combineReducers({
  getProduct: getProductReducer,
  addProduct: addProductReducer,
  updateProduct: updateProductReducer
  // deleteProduct: deleteProductReducer,
});
